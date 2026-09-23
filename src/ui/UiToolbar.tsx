import {Toolbar, type ToolbarProps} from '@mui/material'
import {type ReactNode} from 'react'

type Props = {
    children: ReactNode;
}

const base_toolbar: ToolbarProps = {
    disableGutters: true,
    sx: {
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        px: {
            xs: .5,
            md: 1
        }
    }
}

export const UiToolbar = (props: Props) => (
    <Toolbar {...base_toolbar}>
        {props.children}
    </Toolbar>
)