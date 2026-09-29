import {IconButton, type IconButtonProps} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

type type_cb_fn = () => void

type Props = {
    onClick: type_cb_fn
}

const base_icon_button: IconButtonProps = {
    sx: {
        alignSelf: 'flex-end'
    }
}

export const UiButtonIconClose = (props: Props) => (
    <IconButton {...props} {...base_icon_button}>
        <CloseIcon/>
    </IconButton>
)