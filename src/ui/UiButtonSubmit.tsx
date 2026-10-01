import {Button, CircularProgress, type ButtonProps, type CircularProgressProps, type SvgIconProps} from '@mui/material'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import {keyframes} from '@mui/material/styles'
import {env_theme} from '@/config/env'

type type_cb_fn = () => void

type Props = {
    button: {
        disabled: boolean
        onClick: type_cb_fn
    }
    icon: {
        onAnimationEnd: type_cb_fn
        status_animated: boolean
    }
    submitting: boolean
}

const my_animation = `${keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%)
    }
    50% {
        fill: ${env_theme.secondary}
    }
    100% {
        opacity: 1
    }
`} .5s`

const base_button: ButtonProps = {
    disableRipple: true,
    sx: {
        margin: {xs: '0 auto', sm: '0 auto'},
        width: {xs: '100%', sm: '33%'},
        '&:hover': {
            boxShadow: env_theme.button_box_shadow
        }
    }
}

const base_loading: CircularProgressProps = {
    size: env_theme.icon_button_size,
    sx: {
        color: env_theme.primary
    }
}

const base_icon: SvgIconProps = {
    sx: {
        fontSize: env_theme.icon_button_size
    }
}

export const UiButtonSubmit = (props: Props) => {

    const props_icon: SvgIconProps = {
        onAnimationEnd: props.icon.onAnimationEnd,
        sx: {
            ...base_icon.sx,
            animation: props.icon.status_animated ? my_animation : undefined,
            color: props.button.disabled ? env_theme.disabled : env_theme.primary
        }
    }

    const my_icon = props.submitting ? <CircularProgress {...base_loading}/> : <PlayCircleIcon {...props_icon}/>

    return (
        <Button {...props.button} {...base_button}>
            {my_icon}
        </Button>
    )
}