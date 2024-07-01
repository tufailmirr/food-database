'use client'


import SearchBar from '@/components/Search/SearchBar'
import {  useRouter, useSearchParams } from 'next/navigation'
import React, { useState, useCallback } from 'react'
import SearchResults from './SearchResults'
import { debounce } from '@/utils/helper'



const SearchAutocomplete = () => {
    const [autoComplete, setAutoComplete] = useState<string[]>([])
    const searchParams = useSearchParams()
    const router = useRouter()
    const params = new URLSearchParams(searchParams)

    const fetchAutoComplete = debounce(useCallback(async (query: string) => {
        try {
            const response = await fetch(`/api/edaman/autocomplete?q=${query}&limit=10`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setAutoComplete(data)
        } catch (error) {
            console.error("Something went wrong:", error)
            setAutoComplete([])
        }
    }, []),302)

    const handleInputChange = useCallback((query: string) => {
        fetchAutoComplete(query)
    }, [fetchAutoComplete])

    const handleSelectedWord = useCallback((keyword: string) => {
        params.set('q', keyword)
       params.delete('session')
        setAutoComplete([])
        router.push(`/search?${params.toString()}`)
    }, [params, router])

    return (
        <div className='flex flex-col mx-auto justify-center max-w-[300px] relative'>
            <SearchBar
                key={params.get('q')}
                defaultValue={params.get('q') || ''}
                onInputChange={handleInputChange}
                placeholder='Search e.g `burger`'
            />
            <div className='absolute top-16 w-full left-0 right-0 shadow-lg'>
            {autoComplete.length > 0 && (
                <SearchResults
                    results={autoComplete}
                    onSelect={handleSelectedWord}
                />
            )}
            </div>
        </div>
    )
}

export default SearchAutocomplete
