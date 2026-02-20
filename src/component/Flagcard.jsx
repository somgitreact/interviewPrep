import React from 'react'

const Flagcard = ({item}) => {
  return (
    <div className='card countryCard'>
        <img src={item.png} className='cardimg' alt={item.common} />
        <h6 className='countryname'>{item.common}</h6>
    </div>
  )
}

export default Flagcard