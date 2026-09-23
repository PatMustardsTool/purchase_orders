import {useState} from 'react'

export const useAnimation = () => {
    const [status_animated, setAnimated] = useState(false)

    const Animate = () => {
        setAnimated(false)

        requestAnimationFrame(() => {
            setAnimated(true)
        })
    }

    const onAnimationEnd = () => {
        setAnimated(false)
    }

    return {
        status_animated,
        Animate,
        onAnimationEnd
    }
}