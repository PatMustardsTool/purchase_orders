import {type ReactNode} from 'react'
import {Button, type ButtonProps} from '@mui/material'
import {env_theme} from '@/config/env'

type type_cb_fn = () => void

type Props = {
    button: {
        disabled: boolean
        onClick: type_cb_fn
    }
    sx?: {
        color?: string
    }
    children: ReactNode
}

const base_button: ButtonProps = {
    variant: 'outlined',
    sx: {
        border: `.1rem solid ${env_theme.primary}`,
        borderRadius: env_theme.border_radius,
        height: env_theme.button_height
    }
}

export const UiButton = (props: Props) => {

    const props_button: ButtonProps = {
        ...base_button,
        sx: {
            ...base_button.sx,
            color: props.sx?.color ?? env_theme.primary
        }
    }

    return (
        <Button {...props.button} {...props_button}>
            {props.children}
        </Button>
    )
}