import {Box, type BoxProps} from '@mui/material'
import {type ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const base_box: BoxProps = {
    sx: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
    }
}

export const UiBoxApp = (props: Props) => (
    <Box {...base_box}>
        {props.children}
    </Box>
)