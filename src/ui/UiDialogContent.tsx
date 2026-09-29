import {type ReactNode} from 'react'
import {DialogContent, type DialogContentProps} from '@mui/material'

type Props = {
    children: ReactNode
}

const base_dialog_content: DialogContentProps = {
    sx: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        p: {xs: 1, sm: 5}
    }
}

export const UiDialogContent = (props: Props) => (
    <DialogContent {...base_dialog_content}>
        {props.children}
    </DialogContent>
)