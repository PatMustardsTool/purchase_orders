import {createContext, useRef, useContext, type ReactNode} from 'react'

type type_cb_fn = () => void

type type_context = {
    setReset: (fn: type_cb_fn) => void
    Reset: type_cb_fn
}

type type_provider = {
    value: type_context
}

type Props = {
    children: ReactNode
}

const my_null_fn = () => {}

const ContextPageForm = createContext<type_context>({
    setReset: my_null_fn,
    Reset: my_null_fn
})

export const ProviderPageForm = (props: Props) => {

    const ref_fn_reset = useRef<type_cb_fn>(my_null_fn)

    const value: type_provider = {
        value: {
            setReset: (fn_reset: type_cb_fn) => {
                ref_fn_reset.current = fn_reset
            },
            Reset: () => {
                ref_fn_reset.current()
            }
        }
    }

    return (
        <ContextPageForm.Provider {...value}>
            {props.children}
        </ContextPageForm.Provider>
    )
}

export const usePageForm = () => {
    return useContext(ContextPageForm)
}