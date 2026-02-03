import React, { useState } from 'react'

const Displayname = () => {
    const [input, setInput] = useState({});
    const [text, setText] = useState('')
    const inpChang = (e)=>{
        const {name, value} = e.target;
        setInput((prev)=>({...prev, [name]:value }))
    }
    const submitHandler = ()=>{
     setText(input.fnam + " " + input.lnam)
    }
  return (
    <div>
      <div className=''>
        First Name: <input type='text' name='fnam' value={input.fnam} onChange={inpChang} />
      </div>
      <div className=''>
        Last Name: <input type='text' name='lnam' value={input.lnam} onChange={inpChang} />
      </div>
      <button onClick={submitHandler}>Submit</button>
      {text && <div className='fullname'>Full Name:  {text}</div>}
    </div>
  )
}

export default Displayname