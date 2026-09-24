import {type ReactNode} from 'react'
import {Box, type BoxProps} from '@mui/material'

type type_box_form = BoxProps<'form'>

type Props = {
    children: ReactNode
}

const base_box_form: type_box_form = {
    autoComplete: 'off',
    sx: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
}

export const UiBoxForm = (props: Props) => (
    <Box component='form' {...base_box_form}>
        {props.children}
    </Box>
)