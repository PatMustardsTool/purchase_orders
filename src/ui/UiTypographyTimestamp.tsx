import {Typography, type TypographyProps} from '@mui/material'
import {env_timestamp} from '@/config/env'

const base_timestamp: TypographyProps = {
    variant: 'caption',
    sx: {
        fontStyle: 'italic',
        marginTop: 'auto',
        px: 1
    }
}

export const UiTypographyTimestamp = () => (
    <Typography {...base_timestamp}>
        {env_timestamp}
    </Typography>
)