import {IconButton, type IconButtonProps, type SvgIconProps} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import {keyframes} from '@mui/material/styles'

type type_cb_fn = () => void

type Props = {
    icon_button: {
        onClick: type_cb_fn
    }
    icon: {
        onAnimationEnd: type_cb_fn
        status_animated: boolean
    }
}

const my_animation = `${keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
`} .5s ease-in-out`

const base_icon_button: IconButtonProps = {
    sx: {
        justifySelf: 'end'
    }
}

export const UiButtonIconReset = (props: Props) => {

    const props_icon: SvgIconProps = {
        onAnimationEnd: props.icon.onAnimationEnd,
        sx: {
            animation: props.icon.status_animated ? my_animation : undefined
        }
    }

    return (
        <IconButton {...props.icon_button} {...base_icon_button}>
            <RefreshIcon {...props_icon}/>
        </IconButton>
    )
}