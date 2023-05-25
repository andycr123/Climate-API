import { useEffect, useState } from "react"

export const useFetch = (API) => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(false)

    console.log(API)
    useEffect(() => {
        setLoading(true)
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])
    return {data, isLoading}
}