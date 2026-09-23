import {List, ListItem, ListItemText} from '@mui/material'
import {route_definitions} from '@/config/route_definitions'
import {UiDrawer} from '@/ui/UiDrawer'
import {UiListItemButton} from '@/ui/UiListItemButton'
import {UiTypographyTimestamp} from '@/ui/UiTypographyTimestamp'

type type_cb_fn = () => void

type Props = {
    drawer: {
        onClose: type_cb_fn
        open: boolean
    }
    list: {
        active_route: string
        fn_close: type_cb_fn
        fn_navigate: (path: string) => void
    }
}

const my_menu_items = route_definitions
    .filter((my_route_definition) => my_route_definition.status_menu)
    .map((my_route_definition) => {
        return {
            path: my_route_definition.path,
            label: my_route_definition.path === '/' ? 'Create' : my_route_definition.path.slice(1)
        }
    })

export const ListMenu = (props: Props) => (
    <UiDrawer {...props.drawer}>
        <List>
            {my_menu_items.map((my_menu_item) => {
                const status_route_active = my_menu_item.path === props.list.active_route

                const props_list_item_button = {
                    list_item_button: {
                        onClick: () => {
                            props.list.fn_navigate(my_menu_item.path)
                            props.list.fn_close()
                        },
                        selected: status_route_active
                    }
                }

                const props_list_item_text = {
                    primary: my_menu_item.label
                }

                return (
                    <ListItem key={my_menu_item.path}>
                        <UiListItemButton {...props_list_item_button}>
                            <ListItemText {...props_list_item_text}/>
                        </UiListItemButton>
                    </ListItem>
                )
            })}
        </List>
        <UiTypographyTimestamp/>
    </UiDrawer>
)