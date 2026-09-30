import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {zodResolver} from '@hookform/resolvers/zod'
import {UiBoxForm} from '@/ui/UiBoxForm'
import {UiGrid} from '@/ui/UiGrid'
import {UiGridItem} from '@/ui/UiGridItem'
import {UiDivider} from '@/ui/UiDivider'
import {UiTextField} from '@/ui/UiTextField'
import {UiButtonSubmit} from '@/ui/UiButtonSubmit'
import {Autocomplete} from '@/components/Autocomplete'
import {useDataCreate} from '@/hooks/useDataCreate'
import {usePageForm} from '@/components/ProviderPageForm'
import {useAnimation} from '@/hooks/useAnimation'
import {useBoolean} from '@/hooks/useBoolean'
import {schema_create, schema_default, type SchemaCreate} from '@/schema/SchemaCreate'

// import {user_email} from '@/api/fn_user_get'

export const Create = () => {

    const hook_navigate = useNavigate()
    const hook_page_form = usePageForm()
    const hook_data = useDataCreate()
    const hook_button_icon_copy = useAnimation()
    const hook_button_submit = useAnimation()
    const hook_popup = useBoolean()
    // const hook_popup_item = usePopupItem()

    const {control, formState, handleSubmit, reset} = useForm<SchemaCreate>({
        mode: 'onTouched',
        resolver: zodResolver(schema_create),
        reValidateMode: 'onChange',
        defaultValues: schema_default
    })

    useEffect(() => {hook_page_form.setReset(reset)}, [reset])

    const onSubmit = async (data: SchemaCreate) => {
        console.log(data)
    }

    return (
        <>
            <UiBoxForm>
                <UiGrid flex={{xs: '1', sm: 'none'}}>
                   <UiGridItem size={12} display={{xs: 'none', sm: 'grid'}}>
                        <UiDivider/>
                   </UiGridItem>
                    <UiGridItem size={{xs: 12, sm: 4}}>
                        <Autocomplete
                            controller={{control, name: 'OrderedBy'}}
                            autocomplete={{options: hook_data.options.ordered_by, disabled: formState.isSubmitting}}
                            text_field={{label: 'Ordered By'}}
                        />
                    </UiGridItem>
                    <UiGridItem size={{xs: 12, sm: 4}}>
                        <Autocomplete
                            controller={{control, name: 'Contract'}}
                            autocomplete={{options: hook_data.options.contract, disabled: formState.isSubmitting}}
                            text_field={{label: 'Contract'}}
                        />
                    </UiGridItem>
                    <UiGridItem size={{xs: 12, sm: 4}}>
                        <Autocomplete
                            controller={{control, name: 'JobType'}}
                            autocomplete={{options: hook_data.options.job_type, disabled: formState.isSubmitting}}
                            text_field={{label: 'Job Type'}}
                        />
                    </UiGridItem>
                    <UiGridItem size={{xs: 12, sm: 4}}>
                        <UiTextField
                            controller={{control, name: 'JobReference'}}
                            text_field={{label: 'Job Reference', disabled: formState.isSubmitting}}
                        />
                    </UiGridItem>
                    <UiGridItem size={{xs: 12, sm: 4}}>
                        <Autocomplete
                            controller={{control, name: 'Supplier'}}
                            autocomplete={{options: hook_data.options.supplier, disabled: formState.isSubmitting}}
                            text_field={{label: 'Supplier'}}
                        />
                    </UiGridItem>
                </UiGrid>
                <UiGrid flex={'none'}>
                    <UiGridItem size={12}>
                        <UiButtonSubmit
                            button={{
                                disabled: !formState.isValid || formState.isSubmitting,
                                onClick: () => {
                                    hook_button_submit.Animate()
                                    handleSubmit(onSubmit)()
                                }
                            }}
                            icon={{onAnimationEnd: hook_button_submit.onAnimationEnd, status_animated: hook_button_submit.status_animated}}
                            submitting={formState.isSubmitting}
                        />
                    </UiGridItem>
                </UiGrid>
            </UiBoxForm>
        </>
    )
}