import React, { useEffect, useState } from 'react'
import { Apiresult } from '../api/Allapi'
import Flagcard from '../component/Flagcard'

const Countryflgs = () => {
     const [countries, setCountries] = useState([])
     useEffect(()=>{
           const data = async ()=>{
              const dataresp = await Apiresult('all')
              setCountries(Array.isArray(dataresp) ? dataresp : []);
           }
           data()
     },[])
  return (
    <div className='flagwrp'>
        <h1>Countryflgs</h1>
        <div className='flagbody'>
         { countries?.map((value) => <Flagcard key={value.abbr} item={value} />)}
        </div>
    </div>
  )
}

export default Countryflgs