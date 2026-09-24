import {Box, type BoxProps} from '@mui/material'
import {type ReactNode} from 'react'
import {env_background_image_url} from '@/config/env'

type Props = {
    children: ReactNode
}

const base_box: BoxProps = {
    sx: {
        background: `${env_background_image_url} center / cover`,
        flex: 1,
        minHeight: 0,
        overflow: 'hidden'
    }
}

export const UiBoxPage = (props: Props) => (
    <Box {...base_box}>
        {props.children}
    </Box>
)