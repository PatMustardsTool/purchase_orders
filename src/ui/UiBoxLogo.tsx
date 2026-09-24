import {Box, type BoxProps} from '@mui/material'
import {theme} from '@/config/theme'
import my_logo from '@/assets/logo.jpg'

type type_box_image = BoxProps<'img'>

const {minHeight, ...my_theme_height_breakpoints} = theme.mixins.toolbar

const base_image_box: type_box_image = {
    component: 'img',
    src: my_logo,
    sx: {
        justifySelf: 'center',
        maxHeight: minHeight,
        maxWidth: '100%',
        minHeight: minHeight,
        ...my_theme_height_breakpoints
    }
}

export const UiBoxLogo = () => (
    <Box {...base_image_box}/>
)