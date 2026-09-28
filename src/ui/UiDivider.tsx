import {Divider, type DividerProps} from '@mui/material'
import {env_theme} from '@/config/env'

const base_divider: DividerProps = {
    sx: {
        borderBottomWidth: 1,
        borderColor: env_theme.secondary,
        mb: {xs: 1, md: 2},
        opacity: 0.5
    }
}

export const UiDivider = () => (
    <Divider {...base_divider}/>
)