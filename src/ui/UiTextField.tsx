import {useController, type FieldValues, type Control, type Path} from 'react-hook-form'
import {TextField, type TextFieldProps} from '@mui/material'
import {env_theme} from '@/config/env'

type type_text_field = TextFieldProps['type']

type Props<T extends FieldValues> = {
    controller: {
        control: Control<T>
        name: Path<T>
    }
    text_field: {
        disabled: boolean
        label: string
        type?: type_text_field
    }
}

const base_text_field: TextFieldProps = {
    sx: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: env_theme.secondary,
            borderRadius: env_theme.border_radius
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: env_theme.primary,
            borderWidth: env_theme.border_width
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: env_theme.border_width
        },
        '@media (hover: none)': {
            '& .MuiOutlinedInput-root:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
                borderWidth: 0
            }
        }
    }
}

export const UiTextField = <T extends FieldValues>(props: Props<T>) => {

    const {field, fieldState} = useController(props.controller)

    const props_controller = {
        error: !!fieldState.error && fieldState.isTouched,
        helperText: fieldState.isTouched ? fieldState.error?.message : undefined,
        inputRef: field.ref,
        onBlur: field.onBlur,
        onChange: field.onChange,
        value: field.value ?? ''
    }

    return (
        <TextField {...props_controller} {...props.text_field} {...base_text_field}/>
    )
}