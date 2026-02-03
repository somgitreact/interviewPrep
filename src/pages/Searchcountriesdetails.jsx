import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Searchcountriesdetails = () => {
  const [countries, setCountries] = useState([])
    useEffect(()=>{
       const fetchdata = async()=>{
      const res =  await axios.get('https://crio-location-selector.onrender.com/countries')
      console.log(res.data);
      setCountries(res.data)
       } 
       fetchdata()
    },[])
     console.log(countries);
     
  return (
    <div>
        <select name="" id="">
            <option value=""></option>
        </select>
  <select name="" id="">
            <option value=""></option>
        </select>
          <select name="" id="">
            <option value=""></option>
        </select>
    </div>
  )
}

export default Searchcountriesdetails