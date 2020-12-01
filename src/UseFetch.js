import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(t => setData(t))
    }, [url])

    return data
}

export default useFetch
