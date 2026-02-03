import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Countryflgs from '../pages/Countryflgs'
import Searchcountriesdetails from '../pages/Searchcountriesdetails'
import Displayname from '../pages/Displayname'

const NavigationPage = () => {
  return (
    <div className='mainwrap'>
                <nav>
            <Link to="/">home</Link>
            <Link to="/countridetails">countridetails</Link>
            <Link to="/displayname">Displayname</Link>
        </nav>
        <Routes>
            <Route path='/countridetails' element={<Searchcountriesdetails />} /> 
            <Route path='/displayname' element={<Displayname />} />
            <Route path='/' element={<Countryflgs/>} />
            
        </Routes>
    </div>
  )
}

export default NavigationPage