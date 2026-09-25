import {client} from '@/api/client'
import {env_item_limit} from '@/config/env'
import query_data_get from '@/graphql/data_get.graphql?raw'

type type_record = Record<string, string>

type type_item = {
    name: string
    column_values: {
        id: string
        text: string
    }[]
}

type type_items = {
    data: {
        boards: {
            items_page: {
                cursor: string | null
                items: type_item[]
            }
        }[]
    }
}

type Params = {
    board_id: string
    columns: type_record
}

type Return = {
    table: type_record[]
    options: string[]
}

export const fn_data_get = async (params: Params): Promise<Return> => {

    const my_column_ids = Object.values(params.columns)

    const my_column_entries = Object.entries(params.columns).map(([my_name, my_id]) => {
        return [my_id, my_name]
    })

    const my_column_names = Object.fromEntries(my_column_entries)

    const my_response = await client.post<type_items>('', {
        query: query_data_get,
        variables: {
            var_board_ids: [params.board_id],
            var_column_ids: my_column_ids,
            var_limit: env_item_limit,
            var_cursor: null
        }
    })

    const my_items = my_response.data.data.boards[0].items_page.items

    const table = my_items.map<type_record>((my_item) => {

        const my_entries = my_item.column_values.map((my_column) => {

            return [
                my_column_names[my_column.id],
                my_column.text
            ]
        })

        const my_values = Object.fromEntries(my_entries)

        return {
            name: my_item.name,
            ...my_values
        }
    })

    table.sort((my_current_row, my_next_row) => {
        return my_current_row.name.localeCompare(my_next_row.name)
    })

    const options = table.map((my_row) => {
        return my_row.name
    })

    return {
        table,
        options
    }
}