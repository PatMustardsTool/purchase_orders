import {ListItemButton, type ListItemButtonProps} from '@mui/material'
import {type ReactNode} from 'react'
import {env_theme} from '@/config/env'

type type_cb_fn = () => void

type Props = {
    list_item_button: {
        onClick: type_cb_fn
        selected: boolean
    }
    children: ReactNode
}

const base_list_item_button: ListItemButtonProps = {
    sx: {
        borderRadius: env_theme.border_radius,
        '&:hover': {
            backgroundColor: env_theme.secondary_hover
        },
        '&.Mui-selected': {
            backgroundColor: env_theme.secondary_transparent
        },
        '&.Mui-selected:hover': {
            backgroundColor: env_theme.secondary_hover
        }
    }
}

export const UiListItemButton = (props: Props) => (
    <ListItemButton {...props.list_item_button} {...base_list_item_button}>
        {props.children}
    </ListItemButton>
)