
import React, { useEffect, useState } from 'react'
import { allPurpousData } from '../api/Allapi'

const Searchcountriesdetails = () => {
  const [countries, setCountries] = useState([])
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  const [select, setSelect] = useState({})
  const [showdata, setShowData] = useState(false)
    useEffect(()=>{
       const fetchdata = async()=>{
      const res =  await allPurpousData('https://crio-location-selector.onrender.com/countries')
      //console.log(res);
      setCountries(Array.isArray(res) ? res : [] )
       } 
       fetchdata()
    },[])

    const changhandler = (e)=>{
       const {name, value}= e.target
        setSelect(prev=> ({...prev, [name]: value}))
    }

        useEffect(()=>{
 if (!select.countryName) return;
       const fetchdata = async()=>{
      const res =  await allPurpousData(`https://location-selector.labs.crio.do/country=${select.countryName}/states`)
      //console.log(res);
      setState(Array.isArray(res) ? res : [] )
                setSelect((prev)=> ({...prev, stateName: "", cityName: ""}))
       } 
       fetchdata()

    },[select.countryName])



            useEffect(()=>{
              if (!select.countryName || !select.stateName) return;
       const fetchdata = async()=>{
      const res =  await allPurpousData(`https://location-selector.labs.crio.do/country=${select.countryName}/state=${select.stateName}/cities`)
      //console.log(res);
      setCity(Array.isArray(res) ? res : [] )
        setSelect((prev)=> ({...prev, cityName: ""}))
       } 
       fetchdata()
    },[select.countryName, select.stateName])

   //  console.log("select data", select);
     
  return (
    <div>
        <select name="countryName"  value={select.countryName} onChange={changhandler}>
          <option value="" >Select Country</option>
          {countries.map((item)=> <option key={item} value={item.trim()}>{item}</option>)}            
        </select>
  <select name="stateName"  value={select.stateName} disabled={state.length == 0}  onChange={changhandler}>
            <option value="" >Select State</option>
             {state.map((item)=> <option key={item} value={item.trim()}>{item}</option>)} 
        </select>
          <select name="cityName"  value={select.cityName} disabled={city.length == 0}  onChange={changhandler}>
            <option value="">Select City</option>
              {city.map((item)=> <option key={item} value={item.trim()}>{item}</option>)} 
        </select>
      {select.countryName && select.stateName && select.cityName && (
  <h3>
    You selected {select.cityName}, {select.stateName}, {select.countryName}
  </h3>
)}
       {/* {select.cityName && <div className='infodiv'>“You selected {select.cityName}, {select.stateName}, {select.countryName}": </div>} */}
    </div>
  )
}

export default Searchcountriesdetails