import {type ReactNode} from 'react'
import {ListItemButton, type ListItemButtonProps} from '@mui/material'
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
        textAlign: 'center',
        '& .MuiListItemText-primary': {
            color: 'inherit'
        }
    }
}

export const UiListItemButtonSearch = (props: Props) => {

    const props_list_item_button: ListItemButtonProps = {
        ...props.list_item_button,
        autoFocus: props.list_item_button.selected,
        sx: {
            ...base_list_item_button.sx,
            border: props.list_item_button.selected ? `0.1rem solid ${env_theme.primary}` : 'none',
            color: props.list_item_button.selected ? env_theme.primary : env_theme.secondary
        }
    }

    return (
        <ListItemButton {...props_list_item_button}>
            {props.children}
        </ListItemButton>
    )
}