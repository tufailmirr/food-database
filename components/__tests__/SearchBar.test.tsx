import { fireEvent, screen } from "@testing-library/dom"
import '@testing-library/jest-dom'; 
import { render } from "@testing-library/react"
import { mock } from "node:test"
import SearchBar from "../Search/SearchBar"

describe('Search Bar component', () => {
    const onInputChange = mock.fn()

    afterEach(() => {
        jest.clearAllMocks()
    })
    test('Search Input rendered properly', () => {
        render(<SearchBar onInputChange={onInputChange}/>)
        const input = screen.getByTestId('search-bar')
        expect(input).toBeInTheDocument
    })  
    test('Search Input rendered properly', () => {
        render(<SearchBar onInputChange={onInputChange}/>)
        const input = screen.getByTestId('search-bar')
        fireEvent.change(input,{ target : {
            value : "salaad"
        }})
        expect(input).toHaveValue('salaad');
    })  
})