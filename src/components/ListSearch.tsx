import {List, ListItem, ListItemText} from '@mui/material'
import {UiListItemButtonSearch} from '@/ui/UiListItemButtonSearch'
import {env_theme} from '@/config/env'

type Props = {
    options: string[]
    value?: string | null
    onSelect: (option: string) => void
}

export const ListSearch = (props: Props) => (
    <List sx={{width: '100%'}}>
        {props.options.map((my_option) => {

            const status_selected = my_option === props.value

            const props_list_item_button = {
                list_item_button: {
                    onClick: () => props.onSelect(my_option),
                    status_selected: status_selected
                }
            }

            const props_list_item_text = {
                primary: my_option,
                slotProps: {
                    primary: {
                        sx: {
                            color: status_selected ? env_theme.primary : env_theme.secondary,
                            textAlign: 'center'
                        }
                    }
                }
            }

            return (
                <ListItem key={my_option}>
                    <UiListItemButtonSearch {...props_list_item_button}>
                        <ListItemText {...props_list_item_text}/>
                    </UiListItemButtonSearch>
                </ListItem>
            )
        })}
    </List>
)