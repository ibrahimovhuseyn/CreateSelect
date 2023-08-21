import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Input, Label, Row } from 'reactstrap'
import { apiUrl } from '../Confiq'

function AddCountry() {

    const [countryName, setCountryName]= useState("")


    const addCountry = ()=>{
        axios.post(`${apiUrl}/countries`,{
            name: countryName
        })
        
    }
  return (
    <div>
        <Container>
            <Row>
                <div className="col-4">
                <Label>Add Country</Label>
                <Input
                onChange={e=>setCountryName(e.target.value)}
                />
                <Button
                onClick={addCountry}
                className='my-3'
                >Add</Button>

                </div>
            </Row>
        </Container>
    </div>
  )
}

export default AddCountry