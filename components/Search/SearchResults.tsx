'use client'
import React from 'react'

interface AutocompleteResultsProps {
    results: string[]
    onSelect: (keyword: string) => void
}

const SearchResults: React.FC<AutocompleteResultsProps> = ({ results, onSelect }) => {
    return (
        <div className='bg-white text-black p-5 rounded-b-md active:border-lime-100'>
            <ul>
                {results.map((result) => (
                    <li
                        key={result}
                        onClick={() => onSelect(result)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') onSelect(result)
                        }}
                    >
                        {result}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults
