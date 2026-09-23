import {createContext, useRef, useContext, type ReactNode} from 'react'

type type_cb_fn = () => void

type type_context_form = {
    setReset: (fn: type_cb_fn) => void
    Reset: type_cb_fn
}

type Props = {
    children: ReactNode
}

const my_fn = () => {}

const ContextPageForm = createContext<type_context_form>({
    setReset: my_fn,
    Reset: my_fn
})

export const ProviderPageForm = (props: Props) => {

    const ref_fn_reset = useRef<type_cb_fn>(my_fn)

    return (
        <ContextPageForm.Provider
            value={{
                setReset: (fn_reset: type_cb_fn) => {ref_fn_reset.current = fn_reset},
                Reset: () => {ref_fn_reset.current()}
            }}
        >
            {props.children}
        </ContextPageForm.Provider>
    )
}

export const usePageForm = () => {
    return useContext(ContextPageForm)
}