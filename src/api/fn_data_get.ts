import {client} from '@/api/client'
import {env_item_limit} from '@/config/env'
import query_data_get from '@/graphql/data_get.graphql?raw'
import query_data_get_no_columns from '@/graphql/data_get_no_columns.graphql?raw'

type type_record = Record<string, string>

type type_item = {
    name: string
    column_values: {
        id: string
        text: string
    }[]
}

type type_item_no_columns = {
    name: string
}

type type_items<T> = {
    data: {
        boards: {
            items_page: {
                cursor: string | null
                items: T[]
            }
        }[]
    }
}

type Params = {
    board_id: string
    columns: type_record
}

type Return = {
    my_table: type_record[]
    my_options: string[]
}

export const fn_data_get = async (params: Params): Promise<Return> => {

    const my_column_ids = Object.values(params.columns)

    let my_table: type_record[]

    if (my_column_ids.length > 0)
    {
        const my_response = await client.post<type_items<type_item>>('', {
            query: query_data_get,
            variables: {
                var_board_ids: [params.board_id],
                var_column_ids: my_column_ids,
                var_limit: env_item_limit,
                var_cursor: null
            }
        })

        const my_items = my_response.data.data.boards[0].items_page.items

        const my_column_entries = Object.entries(params.columns).map(([my_name, my_id]) => {
            return [my_id, my_name]
        })

        const my_column_names = Object.fromEntries(my_column_entries)

        my_table = my_items.map((my_item) => {

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

    }
    else
    {
        const my_response = await client.post<type_items<type_item_no_columns>>('', {
            query: query_data_get_no_columns,
            variables: {
                var_board_ids: [params.board_id],
                var_limit: env_item_limit,
                var_cursor: null
            }
        })

        const my_items = my_response.data.data.boards[0].items_page.items

        my_table = my_items.map((my_item) => {

            return {
                name: my_item.name
            }
        })
    }

    my_table.sort((my_current_row, my_next_row) => {
        return my_current_row.name.localeCompare(my_next_row.name)
    })

    const my_options = my_table.map((my_row) => {
        return my_row.name
    })

    return {
        my_table,
        my_options
    }
}