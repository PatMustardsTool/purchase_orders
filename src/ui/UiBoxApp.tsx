import {type ReactNode} from 'react'
import {Box, type BoxProps} from '@mui/material'

type Props = {
    children: ReactNode
}

const base_box: BoxProps = {
    sx: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0,
        overflow: 'hidden'
    }
}

export const UiBoxApp = (props: Props) => (
    <Box {...base_box}>
        {props.children}
    </Box>
)