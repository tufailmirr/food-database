'use client'
import React, { ChangeEvent, useCallback } from 'react'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onInputChange: (query: string) => void;
}

const SearchBar: React.FC<SearchInputProps> = ({ defaultValue, onInputChange, ...props } : SearchInputProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onInputChange(e.target.value)
    }

    return (
        <input
            className=' bg-slate-300 p-5 rounded-md border-teal-100 outline-orange-300'
            onChange={handleChange}
            defaultValue={defaultValue}
            {...props}
            aria-label="Search"
        />
    )
}

export default SearchBar
