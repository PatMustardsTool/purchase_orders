import {type ReactNode} from 'react'
import {Box, type BoxProps} from '@mui/material'

type type_box_form = BoxProps<'form'>

type Props = {
    children: ReactNode
}

const base_box_form: type_box_form = {
    autoComplete: 'off',
    component: 'form',
    sx: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0
    }
}

export const UiBoxForm = (props: Props) => (
    <Box component='form' {...base_box_form}>
        {props.children}
    </Box>
)