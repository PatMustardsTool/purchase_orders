import {type Control, type FieldValues, type Path} from 'react-hook-form'
import {useMediaQuery, useTheme} from '@mui/material'
import {UiAutocompleteDesktop} from '@/ui/UiAutocompleteDesktop'
import {UiAutocompleteMobile} from '@/ui/UiAutocompleteMobile'

export type Props<T extends FieldValues> = {
    controller: {
        control: Control<T>
        name: Path<T>
    }
    autocomplete: {
        disabled: boolean
        options: string[]
    }
    text_field: {
        label: string
    }
}

export const Autocomplete = <T extends FieldValues>(props: Props<T>) => {

    const hook_theme = useTheme()
    const status_mobile = useMediaQuery(hook_theme.breakpoints.down('sm'))

    if (status_mobile)
    {
        return <UiAutocompleteMobile {...props}/>
    }
    else
    {
        return <UiAutocompleteDesktop {...props}/>
    }
}