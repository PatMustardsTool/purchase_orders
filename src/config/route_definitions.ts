import {lazy, type ComponentType} from 'react'
import {Create} from '@/pages/Create'

const Edit = lazy(() => import('@/pages/Edit').then(module => ({default: module.Edit})))
const Search = lazy(() => import('@/pages/Search').then(module => ({default: module.Search})))

type type_route = {
    component: ComponentType
    path: string
    status_menu: boolean
}

export const route_definitions: type_route[] = [
    {
        component: Create,
        path: '/',
        status_menu: true
    },
    {
        component: Edit,
        path: '/Edit',
        status_menu: false
    },
    {
        component: Search,
        path: '/Search',
        status_menu: true
    }
]