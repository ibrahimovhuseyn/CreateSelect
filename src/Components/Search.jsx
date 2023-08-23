import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Input } from 'reactstrap'
import { apiUrl } from '../Confiq';
import "../assets/Style/Style.css"




function Search() {

    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])

    const [inputValue, setInputValue] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);



    useEffect(() => {
        findData()
    }, [])





    const names = []

    city.map(item => {
        names.push(item.name)
    })
    country.map(item => {
        names.push(item.name)
    })


    const searchItem = (str) => {
        const searchValue = str.target.value
        setInputValue(searchValue)

        const filtered = names.filter(item => item.toUpperCase().startsWith(searchValue.toUpperCase()))
        setFilteredResults(filtered)
    }


    const findData = () => {
        axios.get(`${apiUrl}/cities`).then(res => setCity(res.data))

        axios.get(`${apiUrl}/countries`).then(res => setCountry(res.data))

    }

    return (
        <div>
            <Container>
                <div className='my-4'>
                    <Input
                        type='text'
                        value={inputValue}
                        className='w-50'
                        onChange={e => searchItem(e)}
                    />
                    <ul>
                        {filteredResults.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Search