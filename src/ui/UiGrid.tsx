import {type ReactNode, type RefObject} from 'react'
import {Grid, type GridProps} from '@mui/material'
import {type ResponsiveStyleValue} from '@mui/system'
import {env_theme} from '@/config/env'

type Props = {
    children: ReactNode
    flex: ResponsiveStyleValue<string | number>
    ref?: RefObject<HTMLDivElement | null>
}

const base_grid: GridProps = {
    container: true,
    spacing: {
        xs: 1.25,
        md: 2
    },
    sx: {
        // border: '1px solid red',
        minHeight: 0,
        margin: 0,
        width: '100%',
        overflowY: 'auto',
        padding: {
            xs: 1.25,
            md: 2
        },
        '&::-webkit-scrollbar': {
            width: {
                xs: 3,
                md: 6
            }
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: env_theme.primary_transparent,
            borderRadius: env_theme.border_radius
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: env_theme.primary
        }
    }
}

export const UiGrid = (props: Props) => {

    const props_grid: GridProps = {
        ...base_grid,
        ref: props.ref,
        sx: {
            ...base_grid.sx,
            flex: props.flex
        }
    }

    return (
        <Grid {...props_grid}>
            {props.children}
        </Grid>
    )
}