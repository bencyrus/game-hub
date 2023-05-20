import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'
import { AxiosRequestConfig } from 'axios'

interface FetchResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any[],
) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            setLoading(true)
            apiClient
                .get<FetchResponse<T>>(endpoint, requestConfig)
                .then((res) => {
                    setData(res.data.results)
                })
                .catch((err) => {
                    setError(err.message)
                })
                .finally(() => {
                    setLoading(false)
                })
        },
        deps ? [...deps] : [],
    )

    return { data, error, loading }
}

export default useData
