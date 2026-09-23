import {IconButton, type IconButtonProps} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

type type_cb_fn = () => void

type Props = {
    onClick: type_cb_fn
}

const base_icon_button: IconButtonProps = {
    sx: {
        justifySelf: 'start'
    }
}

export const UiButtonIconMenu = (props: Props) => (
    <IconButton {...props} {...base_icon_button}>
        <MenuIcon/>
    </IconButton>
)