import {useController, type Control, type FieldValues, type Path} from 'react-hook-form'
import {UiGrid} from '@/ui/UiGrid'
import {UiButton} from '@/ui/UiButton'
import {UiTextFieldSearch} from '@/ui/UiTextFieldSearch'
import {ListSearch} from '@/components/ListSearch'
import {Popup} from '@/components/Popup'
import {useBoolean} from '@/hooks/useBoolean'
import {useValue} from '@/hooks/useValue'
import {env_theme} from '@/config/env'

type Props<T extends FieldValues> = {
    controller: {
        control: Control<T>
        name: Path<T>
    }
    autocomplete: {
        disabled: boolean
        options: string[]
    }
    text_field: {
        label: string
    }
}

export const UiAutocompleteMobile = <T extends FieldValues>(props: Props<T>) => {

    const {field} = useController(props.controller)

    const hook_popup = useBoolean()
    const hook_value = useValue()

    const my_value = field.value ?? null

    const my_filtered_options = props.autocomplete.options.filter((my_option) => {
        return my_option.toLowerCase().includes(hook_value.value.toLowerCase())
    })

    const my_label = my_value ?? props.text_field.label

    return (
        <>
            <UiButton
                button={{
                    onClick: hook_popup.Enable,
                    disabled: props.autocomplete.disabled
                }}
                sx={{
                    color: my_value === null ? env_theme.disabled : env_theme.primary
                }}
            >
                {my_label}
            </UiButton>
            <Popup
                dialog={{
                    open: hook_popup.status
                }}
                icon_button={{
                    onClick: () => {
                        hook_value.setValue('')
                        hook_popup.Disable()
                    }
                }}
            >
                <UiGrid flex={'none'}>
                    <UiTextFieldSearch
                        value={hook_value.value}
                        onChange={(my_event) => hook_value.setValue(my_event.target.value)}
                    />
                </UiGrid>
                <UiGrid flex={'1'}>
                    <ListSearch
                        options={my_filtered_options}
                        value={my_value}
                        onSelect={(my_option) => {
                            field.onChange(my_option)
                            hook_value.setValue('')
                            hook_popup.Disable()
                        }}
                    />
                </UiGrid>
            </Popup>
        </>
    )
}