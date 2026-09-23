import {Suspense} from 'react'
import {useRoutes} from 'react-router-dom'
import {route_definitions} from '@/config/route_definitions'

export const PageRenderer = () => {

    const my_routes = route_definitions.map((my_route_definition) => {
        return {
            path: my_route_definition.path,
            element: (<Suspense fallback={null}><my_route_definition.component/></Suspense>)
        }
    })

    return useRoutes(my_routes)
}