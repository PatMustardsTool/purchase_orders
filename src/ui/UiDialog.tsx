import {type ReactNode} from 'react'
import {Dialog, type DialogProps} from '@mui/material'
import {env_background_image_url} from '@/config/env'

type type_props_dialog = Omit<DialogProps, 'open'>

type Props = {
    open: boolean
    children: ReactNode
}

const base_dialog: type_props_dialog = {
    fullScreen: true,
    sx: {
        '& .MuiDialog-paper': {
            background: `${env_background_image_url} center / cover`
        }
    }
}

export const UiDialog = ({children, ...props_dialog}: Props) => (
    <Dialog {...props_dialog} {...base_dialog}>
        {children}
    </Dialog>
)