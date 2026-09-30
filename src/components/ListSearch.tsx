import {List, ListItem, ListItemText, type ListProps} from '@mui/material'
import {UiListItemButtonSearch} from '@/ui/UiListItemButtonSearch'

type Props = {
    options: string[]
    value?: string | null
    onSelect: (my_option: string) => void
}

const base_list: ListProps = {
    sx: {
        width: '100%'
    }
}

export const ListSearch = (props: Props) => (
    <List {...base_list}>
        {props.options.map((my_option) => {

            const status_selected = my_option === props.value

            const props_list_item_button = {
                list_item_button: {
                    onClick: () => props.onSelect(my_option),
                    status_selected: status_selected
                }
            }

            const props_list_item_text = {
                primary: my_option
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