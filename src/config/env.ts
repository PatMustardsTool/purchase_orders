import my_background from '@/assets/background.svg'

export const env_background_image_url = `url("${my_background}")`

export const env_timestamp = '24/09/26 11:44'

export const env_stale_time = 3600000

export const env_theme = {
    primary: '#B8860B',
    primary_lighter: '#BF921F',
    primary_transparent: '#B8860B99',
    secondary: '#E0E0E0',
    secondary_transparent: '#E0E0E033',
    secondary_hover: '#E0E0E066',
    secondary_contrast: '#212121',
    disabled: '#8A8A8A',
    border_radius: '.5rem',
    border_width: '.25rem',
    scrollbar_width: 6,
    button_height: 56,
    icon_button_size: 80
}

export const env_client = {
    base_url: 'https://api.monday.com/v2',
    headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjYxNzQ1OTczMCwiYWFpIjoxMSwidWlkIjo5OTIwNzM0NSwiaWFkIjoiMjAyNi0wMi0wNVQxMjo1NDo0NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjQ2OTI1MTksInJnbiI6ImV1YzEifQ.flotSYfrZz9HqtugRDmoQILaQ-nvzMaAsnW1mNCEh70',
        'Content-Type': 'application/json'
    }
}

export const env_board_purchase_order = {
    board_id: '5099620471',
    columns:
    {
        FormattedId: 'pulse_id_mm4xbj0m',
        OrderedBy: 'text_mm55ew6x',
        Contract: 'text_mm4wtk58',
        JobType: 'text_mm55zb69',
        JobReference: 'text_mm4whtmf',
        Supplier: 'text_mm53pza3',
        Eque2Date: 'date4',
        Status: 'color_mm7g8zdw',
        Total: 'lookup_mm5rp7j7',
        Lines: 'formula_mm7gfc88',
    },
    sub_item_columns: {
        Code: 'text_mm5nd711',
        Description: 'text_mm5n52jx',
        Price : 'numeric_mm5ndsjz',
        Qty: 'numeric_mm5n1j7g',
        Subtotal: 'numeric_mm5re98c'
    }
}

export const env_board_contracts = {
    board_id: '5101355272',
    columns: {}
}

export const env_board_suppliers = {
    board_id: '5101355573',
    columns: {}
}

export const env_board_codes = {
    board_id: '5101355724',
    columns: {}
}

export const env_board_job_type = {
    board_id: '5100039462',
    columns: {
        'Abrev': 'text_mm12tn88'
    }
}

export const env_board_ordered_by = {
    board_id: '5100039496',
    columns: {
        'Email': 'text_mm12tn88',
        'Initials': 'text_mm547tst'
    }
}

export const env_board_raised_by = {
    board_id: '5100039516',
    columns: {
        'Email': 'text_mm12tn88',
        'Initials': 'text_mm5424cs'
    }
}