import {useQuery} from '@tanstack/react-query'
import {fn_data_get} from '@/api/fn_data_get'
import {env_board_contracts, env_board_suppliers, env_board_job_type, env_board_ordered_by, env_stale_time,} from '@/config/env'

const my_empty_data = {
    tables: {
        job_type: [],
        ordered_by: []
    },
    options: {
        contract: [],
        supplier: [],
        job_type: [],
        ordered_by: []
    }
}

export const useDataCreate = () => {

    const my_tanstack_query = useQuery({
        queryKey: ['data-create'],
        queryFn: async () => {
            const [
                contract,
                supplier,
                job_type,
                ordered_by,
            ] = await Promise.all([
                fn_data_get(env_board_contracts),
                fn_data_get(env_board_suppliers),
                fn_data_get(env_board_job_type),
                fn_data_get(env_board_ordered_by)
            ])

            return {
                tables: {
                    job_type: job_type.my_table,
                    ordered_by: ordered_by.my_table
                },
                options: {
                    contract: contract.my_options,
                    supplier: supplier.my_options,
                    job_type: job_type.my_options,
                    ordered_by: ordered_by.my_options
                }
            }
        },
        staleTime: env_stale_time
    })

    return {
        my_tables: my_tanstack_query.data?.tables ?? my_empty_data.tables,
        options: my_tanstack_query.data?.options ?? my_empty_data.options,
        loading: my_tanstack_query.isPending,
        error: my_tanstack_query.error
    }
}