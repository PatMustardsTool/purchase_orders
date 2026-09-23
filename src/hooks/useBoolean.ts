import {useState} from 'react'

export const useBoolean = () => {
    const [status, setStatus] = useState(false)

    const Enable = () => setStatus(true)
    const Disable = () => setStatus(false)

    return {
        status,
        Enable,
        Disable
    }
}