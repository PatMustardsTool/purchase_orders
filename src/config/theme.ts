import {createTheme} from '@mui/material/styles'
import {env_theme} from '@/config/env'

export const theme = createTheme({
    palette: {
        primary: {
            main: env_theme.primary
        },
        secondary: {
            main: env_theme.secondary
        },
        action: {
            disabled: env_theme.disabled
        }
    },

    shape: {
        borderRadius: env_theme.border_radius
    },

    components: {
        MuiSvgIcon: {
            defaultProps: {
                color: 'secondary',
                fontSize: 'large'
            }
        },

        MuiTypography: {
            defaultProps: {
                color: 'secondary'
            }
        },

        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: env_theme.secondary
                },
                head: {
                    color: env_theme.primary
                }
            }
        }
    }
})