import React from 'react'

const Flagcard = ({item}) => {
  return (
    <div className='card'>
        <img src={item.flag} className='cardimg' alt={item.name} />
        <h6 className='countryname'>{item.name}</h6>
    </div>
  )
}

export default Flagcard