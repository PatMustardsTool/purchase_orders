import {type ReactNode} from 'react'
import {UiDialog} from '@/ui/UiDialog'
import {UiButtonIconClose} from '@/ui/UiButtonIconClose'
import {UiDialogContent} from '@/ui/UiDialogContent'

type type_cb_fn = () => void

type Props = {
    dialog: {
        open: boolean
    }
    icon_button: {
        onClick: type_cb_fn
    }
    children: ReactNode
}

export const Popup = (props: Props) => {
    return (
        <UiDialog {...props.dialog}>
            <UiButtonIconClose {...props.icon_button}/>
            <UiDialogContent>
                {props.children}
            </UiDialogContent>
        </UiDialog>
    )
}