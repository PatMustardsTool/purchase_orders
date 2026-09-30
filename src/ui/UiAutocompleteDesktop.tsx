import {useController, type Control, type FieldValues, type Path} from 'react-hook-form'
import {Autocomplete, type AutocompleteProps, type AutocompleteRenderInputParams, TextField, type TextFieldProps} from '@mui/material'
import {type SyntheticEvent} from 'react'
import {env_theme} from '@/config/env'

type type_autocomplete = Pick<AutocompleteProps<string, false, false, false>, 'slotProps'| 'sx'>

type Props<T extends FieldValues> = {
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

const base_clear_indicator = {
    sx: {
        '& .MuiSvgIcon-root': {
            color: env_theme.secondary_contrast
        },
        '&:hover .MuiSvgIcon-root': {
            color: env_theme.primary
        }
    }
}

const base_list_box = {
    sx: {
        '& .MuiAutocomplete-option[aria-selected="true"]': {
            backgroundColor: env_theme.primary,
            color: 'white'
        },
        '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
            backgroundColor: env_theme.primary
        },
        '& .MuiAutocomplete-option.Mui-focused:not([aria-selected="true"])': {
            backgroundColor: env_theme.primary_transparent,
            color: 'white'
        },
        '& .MuiAutocomplete-option[aria-selected="true"]:hover': {
            color: env_theme.secondary_contrast
        },
        '&::-webkit-scrollbar': {
            width: env_theme.scrollbar_width
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

const base_paper = {
    sx: {
        backgroundColor: env_theme.secondary
    }
}

const base_popup_indicator = {
    sx: {
        '& .MuiSvgIcon-root': {
            color: env_theme.secondary_contrast
        }
    }
}

const base_text_field: TextFieldProps = {
    sx: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: env_theme.secondary,
            borderRadius: env_theme.border_radius
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: env_theme.primary,
            borderWidth: env_theme.border_width
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: env_theme.border_width
        },
        '@media (hover: none)': {
            '& .MuiOutlinedInput-root:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
                borderWidth: 0
            }
        }
    }
}

const base_autocomplete: type_autocomplete = {
    sx: {
        '@media (hover: hover) and (pointer: fine)': {
            '&:hover .MuiAutocomplete-popupIndicator .MuiSvgIcon-root': {
                color: env_theme.primary
            }
        }
    },
    slotProps: {
        clearIndicator: base_clear_indicator,
        listbox: base_list_box,
        paper: base_paper,
        popupIndicator: base_popup_indicator
    }
}

export const UiAutocompleteDesktop = <T extends FieldValues>(props: Props<T>) => {

    const {field} = useController(props.controller)

    const props_controller = {
        autocomplete: {
            onChange: (_: SyntheticEvent, value: string | null) => field.onChange(value),
            value: field.value ?? null
        },
        render_input: {
            inputRef: field.ref
        }
    }

    const my_render_input = (params: AutocompleteRenderInputParams) => (
        <TextField {...props_controller.render_input} {...props.text_field} {...params} {...base_text_field}/>
    )

    return (
        <Autocomplete renderInput={my_render_input} {...props_controller.autocomplete} {...props.autocomplete} {...base_autocomplete}/>
    )
}