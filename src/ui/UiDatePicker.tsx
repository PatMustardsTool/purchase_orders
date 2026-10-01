import {type MouseEvent, type KeyboardEvent} from 'react'
import {useController, type Control, type FieldValues, type Path} from 'react-hook-form'
import {DatePicker, type DatePickerProps} from '@mui/x-date-pickers'
import {env_theme} from '@/config/env'

type Props<T extends FieldValues> = {
    controller: {
        control: Control<T>
        name: Path<T>
    }
    date_picker: {
        disabled: boolean
        label: string
    }
}

const fn_get_picker = (my_event: MouseEvent | KeyboardEvent) =>
    my_event.currentTarget.closest('.MuiPickersTextField-root')

const fn_handle_click = (my_event: MouseEvent) => {
    fn_get_picker(my_event)?.querySelector<HTMLButtonElement>('[data-mui-picker-open-button]')?.click()
}

const fn_handle_key_down = (my_event: KeyboardEvent) => {
    if (my_event.key === 'Enter') {
        my_event.preventDefault()
        fn_get_picker(my_event)?.querySelector('input')?.click()
    }
}

const fn_focus_datepicker = (my_event: MouseEvent | KeyboardEvent) => {
    fn_get_picker(my_event)?.querySelector('input')?.focus()
}

const base_clear_icon = {
    sx: {
        color: env_theme.secondary_contrast,
        '&:hover': {color: env_theme.primary}
    }
}

const base_day = {
    sx: {
        '&.Mui-selected': {backgroundColor: env_theme.primary},
        '&.Mui-selected:hover': {color: env_theme.secondary_contrast},
        '&:hover': {border: `.1rem solid ${env_theme.primary}`},
        '&.MuiPickerDay-today:hover': {outline: `.1rem solid ${env_theme.primary}`}
    }
}

const base_field = {
    clearable: true,
    onClick: fn_handle_click,
    onKeyDown: fn_handle_key_down,
    readOnly: true,
    placeholder: 'ddd, mmm dd, yyyy',
    sx: {
        userSelect: 'none',
        '& .MuiPickersOutlinedInput-root': {
            backgroundColor: env_theme.secondary,
            borderRadius: env_theme.border_radius
        },
        '& *': {
            cursor: 'pointer'
        },
        '& *::selection': {
            backgroundColor: 'transparent'
        },
        '& .MuiPickersOutlinedInput-root:hover .MuiPickersOutlinedInput-notchedOutline': {
            borderColor: env_theme.primary,
            borderWidth: env_theme.border_width
        },
        '& .MuiPickersOutlinedInput-root.Mui-focused .MuiPickersOutlinedInput-notchedOutline': {
            borderWidth: env_theme.border_width
        },
        '& .MuiPickersOutlinedInput-root:hover [data-mui-picker-open-button] svg': {
            color: env_theme.primary
        },
        '@media (hover: none)': {
            '& .MuiPickersOutlinedInput-root:hover:not(.Mui-focused) .MuiPickersOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
                borderWidth: 0
            }
        }
    }
}

const base_open_picker_icon = {
    onClick: fn_focus_datepicker,
    sx: {
        color: env_theme.secondary_contrast
    }
}

const base_paper = {
    sx: {
        backgroundColor: env_theme.secondary,
        '& .MuiPickersArrowSwitcher-button svg': {
            color: env_theme.secondary_contrast
        },
        '& .MuiPickersArrowSwitcher-button:hover svg': {
            color: env_theme.primary
        },
        '& .MuiPickersCalendarHeader-label': {
            color: env_theme.secondary_contrast
        },
        '& .MuiPickersCalendarHeader-switchViewButton svg': {
            color: env_theme.secondary_contrast
        },
        '& .MuiPickersCalendarHeader-switchViewButton:hover svg': {
            color: env_theme.primary
        },
        '& .MuiYearCalendar-root': {
            scrollbarWidth: 'thin',
            scrollbarColor: `${env_theme.primary} transparent`
        }
    }
}

const base_toolbar = {
    sx: {
        '& .MuiDatePickerToolbar-title': {
            color: env_theme.secondary_contrast
        }
    }
}

const base_date_picker: DatePickerProps = {
    closeOnSelect: true,
    format: 'EEE, MMM do, yyyy',
    localeText: {
        fieldWeekDayPlaceholder: () => 'ddd',
        fieldMonthPlaceholder: () => 'mmm',
        fieldDayPlaceholder: () => 'dd',
        fieldYearPlaceholder: () => 'yyyy'
    },
    slotProps: {
        clearIcon: base_clear_icon,
        day: base_day,
        desktopPaper: base_paper,
        field: base_field,
        mobilePaper: base_paper,
        openPickerIcon: base_open_picker_icon,
        toolbar: base_toolbar
    }
}

export const UiDatePicker = <T extends FieldValues>(props: Props<T>) => {

    const {field, fieldState} = useController(props.controller)

    const props_controller = {
        inputRef: field.ref,
        onChange: (my_value: unknown) => {
            field.onChange(my_value)
            field.onBlur()
        },
        value: field.value ?? null,
        slotProps: {
            ...base_date_picker.slotProps,
            field: {
                ...base_date_picker.slotProps?.field,
                error: !!fieldState.error && fieldState.isTouched,
                helperText: fieldState.isTouched ? fieldState.error?.message : undefined
            }
        }
    }

    return (
        <DatePicker {...props_controller} {...props.date_picker} {...base_date_picker}/>
    )
}