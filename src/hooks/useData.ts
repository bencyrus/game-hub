import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'

interface FetchResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint)
            .then((res) => {
                setData(res.data.results)
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { data, error, loading }
}

export default useData
