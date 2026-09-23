import {Drawer, type DrawerProps} from '@mui/material'
import {type ReactNode} from 'react'
import {env_theme} from '@/config/env'

type Props = {
    children: ReactNode
    onClose: () => void
    open: boolean
}

const base_paper = {
    sx: {
        backgroundColor: env_theme.primary
    }
}

const base_drawer: DrawerProps = {
    anchor: 'left',
    slotProps: {
        paper: base_paper
    }
}

export const UiDrawer = (props: Props) => (
    <Drawer {...props} {...base_drawer}>
        {props.children}
    </Drawer>
)