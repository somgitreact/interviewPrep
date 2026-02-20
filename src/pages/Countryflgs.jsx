import React, { useEffect, useState } from 'react'
import { Apiresult } from '../api/Allapi'
import Flagcard from '../component/Flagcard'

const Countryflgs = () => { 
     const [countries, setCountries] = useState([])
    // console.log("-------",countries);
     
          const [serchcountries, setSerchcountries] = useState(countries)
     const [txtinp, setTxtinp] = useState('')
     useEffect(()=>{
           const data = async ()=>{
             // const dataresp = await Apiresult('countries')
              const dataresp = await Apiresult(`https://countries-search-data-prod-812920491762.asia-south1.run.app/countries`)
             // console.log("dddd", dataresp);
              
              setCountries(Array.isArray(dataresp) ? dataresp : []);
              setSerchcountries(Array.isArray(dataresp) ? dataresp : [])
           }
           data()
     },[])
     const srchHandler = (e)=>{
      
        setTxtinp(e.target.value)
       
       

     }

     useEffect(()=>{
      const fechdata = ()=>{
         let result = countries.filter((value) => (value.common.toLowerCase()).includes(txtinp.toLowerCase().trim()))
        console.log("result, ", result);
        
        setSerchcountries(result)
      }
      fechdata()
     },[txtinp, countries])
  return (
    <div className='flagwrp'>
        <h1>Countryflgs</h1>
        <div className='search'>Find Your Country Flag: <input type='text' value={txtinp} onChange={srchHandler}  /></div>
        <div className='flagbody'>
         { serchcountries?.map((value, index) => <Flagcard key={index} item={value} />)}
        </div>
    </div>
  )
}

export default Countryflgs