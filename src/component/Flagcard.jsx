import React from 'react'

const Flagcard = ({item}) => {
  return (
    <div className='card countryCard'>
        <img src={item.png} className='cardimg' alt={item.common} />
        <h2 className='countryname'>{item.common}</h2>
    </div>
  )
}

export default Flagcard