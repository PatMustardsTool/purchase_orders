import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {useNavigate} from 'react-router-dom'

import {usePageForm} from '@/components/ProviderPageForm'
import {schema_create, schema_default, type SchemaCreate} from '@/schema/SchemaCreate'

const my_grid_size = {xs: 12, sm: 4}

export const Create = () => {

    const hook_navigate = useNavigate()
    const hook_page_form = usePageForm()
    const hook_data = useDataCreate()
    const hook_popup = useBoolean()
    const hook_button_icon_copy = useAnimation()
    const hook_button_submit = useAnimation()
    const hook_popup_item = usePopupItem()

    const {control, formState, handleSubmit, reset} = useForm<SchemaCreate>({
        mode: 'onTouched',
        resolver: zodResolver(schema_create),
        reValidateMode: 'onChange',
        defaultValues: schema_default
    })

    useEffect(() => hook_page_form.setReset(reset), [reset])

    return (
        <div>Create</div>
    )
}