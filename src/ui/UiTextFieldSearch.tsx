import {type ChangeEvent} from 'react'
import {TextField, type TextFieldProps} from '@mui/material'
import {env_theme} from '@/config/env'

type Props = {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const base_text_field: TextFieldProps = {
    autoFocus: true,
    fullWidth: true,
    label: 'Search...',
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

export const UiTextFieldSearch = (props: Props) => {

    return (
        <TextField {...props} {...base_text_field}/>
    )
}