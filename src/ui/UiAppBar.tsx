import {AppBar, type AppBarProps} from '@mui/material'
import {type ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const base_app_bar: AppBarProps = {
    color: 'primary',
    position: 'sticky'
}

export const UiAppBar = (props: Props) => (
    <AppBar {...base_app_bar}>
        {props.children}
    </AppBar>
)