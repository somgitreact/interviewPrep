import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Countryflgs from '../pages/Countryflgs'
import Searchcountriesdetails from '../pages/Searchcountriesdetails'

const NavigationPage = () => {
  return (
    <div className='mainwrap'>
                <nav>
            <Link to="/">home</Link>
            <Link to="/countridetails">countridetails</Link>
        </nav>
        <Routes>
            <Route path='/countridetails' element={<Searchcountriesdetails />} /> 
            <Route path='/' element={<Countryflgs/>} />
        </Routes>
    </div>
  )
}

export default NavigationPage