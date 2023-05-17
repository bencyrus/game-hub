import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'

interface Genre {
    id: number
    name: string
}

interface FetchGenresResponse {
    count: number
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        apiClient
            .get<FetchGenresResponse>('/genres')
            .then((res) => {
                setGenres(res.data.results)
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { genres, error, loading }
}

export default useGenres
