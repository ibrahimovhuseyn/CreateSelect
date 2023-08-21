import React , { useEffect, useState } from 'react'

import axios from 'axios';
import Select from 'react-select';
import { Button, Container, Input, Label, Row, } from "reactstrap"
import { apiUrl, toastConfiq } from '../Confiq';
import { toast } from 'react-toastify';

function Selection() {
    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [countryName, setCountryName] = useState("")
    const [cityName, setCityName] = useState("")
  
    useEffect(() => {
      getCountyList()
      }, [])
  
    const getCountyList = () => {
      axios.get(`${apiUrl}/countries`).then(res => setCountry(res.data))
    }
    const getCityList = (country_id) => {
      axios.get(`${apiUrl}/cities?country_id=${country_id.id}`).then(res=>setCity(res.data))
      setSelectedCountry(country_id)
    }

  
    const AddCountry = ()=>{
      if(!countryName){
        toast.error("Please add the country name", toastConfiq)
        return
      }
     

      if(country.find(item=>item.name.toUpperCase() === countryName.toUpperCase())){
    toast.error("This country has already been", toastConfiq)
    return
      }
      axios.post(`${apiUrl}/countries`,{
        name:countryName
      }).then(res=>{
        setCountry(prevState=>[...prevState, res.data])
      })
      setCountryName("")
      toast.success("Successfully operation", toastConfiq)

    }

    const addCity = ()=>{
   
      if(!cityName){
        toast.error("Please add the city name", toastConfiq)
        return
      }
      if(city.find(item=>item.name.toUpperCase() === cityName.toUpperCase())){
        toast.error("This city has already been", toastConfiq)
        return
      }

      axios.post(`${apiUrl}/cities`,{
        name : cityName,
        country_id : selectedCountry.id
      }).then(res=>{
        setCity(prevstate=>[...prevstate, res.data])
      })
      setCityName("")
      toast.success("Successfully operation", toastConfiq)
    }
  
  
    return (
      <Container className='my-5'>
        <Row>
          <div className="col-4">
            <Label htmlFor='country'>Select country</Label>
            <Select
              value={selectedCountry}
              isClearable
              options={country}
              getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
              onChange={e => getCityList(e)}
            />
          </div>
          {
            selectedCountry? 
            <div className="col-4">
              <Label>Add City</Label>
              <Input
              onChange={e=>setCityName(e.target.value)}
              value={cityName}
              />
              <Button
              onClick={addCity}
              className='mt-4'
              >Add</Button>
            </div>
             :
              ""
          }
          <div className="col-4">
            <Label>Select city</Label>
            <Select
              isClearable
              options= {city}
              getOptionLabel={option=>option.name}
              getOptionValue={option=>option.id}
            />
          </div>
        </Row>
        <Row  className='mt-4'>
          <div className="col-3">
            <Label>Add Country</Label>
            <Input
            value={countryName}
            onChange={e=>setCountryName(e.target.value)}
            />
            <Button 
            className='my-3'
            onClick={AddCountry}
            >Add</Button>
          </div>
        </Row>
      </Container>
  
    )
}

export default Selection