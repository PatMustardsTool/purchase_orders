import {type ReactNode} from 'react'
import {Grid, type GridProps} from '@mui/material'
import {type ResponsiveStyleValue} from '@mui/system'

type type_size = GridProps['size']
type type_display = ResponsiveStyleValue<'none' | 'grid'>
type type_justify_items = ResponsiveStyleValue<'start' | 'center' | 'end'>

type Props = {
    children: ReactNode
    size: type_size
    display?: type_display
    justifyItems?: type_justify_items
}

const base_grid = {
    sx: {
        // border: '1px solid red',
        alignItems: 'center',
        display: 'grid'
    }
}

export const UiGridItem = (props: Props) => {

    const props_grid: GridProps = {
        size: props.size,
        sx: {
            ...base_grid.sx,
            display: props.display ?? base_grid.sx.display,
            justifyItems: props.justifyItems
        }
    }

    return (
        <Grid {...props_grid}>
            {props.children}
        </Grid>
    )
}