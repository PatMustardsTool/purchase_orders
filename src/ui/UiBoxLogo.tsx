import {Box, type BoxProps} from '@mui/material'
import {theme} from '@/config/theme'
import my_logo from '@/assets/logo.jpg'

const {minHeight, ...theme_height_breakpoints} = theme.mixins.toolbar

const base_image_box: BoxProps<'img'> = {
    component: 'img',
    src: my_logo,
    sx: {
        justifySelf: 'center',
        maxHeight: minHeight,
        maxWidth: '100%',
        minHeight: minHeight,
        ...theme_height_breakpoints
    }
}

export const UiBoxLogo = () => (
    <Box {...base_image_box}/>
)