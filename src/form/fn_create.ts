import {type SchemaCreate} from '@/schema/SchemaCreate'

type type_record = Record<string, string>

type Params = {
    data: SchemaCreate
    job_type_table: type_record[]
    ordered_by_table: type_record[]
}

export const fn_create = async (params: Params) => {

    console.log(params.data)
}