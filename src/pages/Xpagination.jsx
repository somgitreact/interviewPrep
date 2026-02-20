import React, { useEffect, useState } from 'react'
import { Apiresult } from '../api/Allapi'

const Xpagination = () => {
     const [employee, setEmployee] = useState([])
     const [curntemp, setCurntemp] = useState([])
     const [count, setCount] = useState({'start':0, 'end':10})
     let dividCunt= Math.ceil(employee.length / 10);
     //console.log(dividCunt);
     
    useEffect(()=>{
         const apidata = async ()=>{
             const fetchdata =  await Apiresult('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
           //  console.log(fetchdata);
             setEmployee(fetchdata)
         }
         apidata()
    },[])


    useEffect(()=>{
        const paged = async ()=>{
           // dividCunt = employee.length / 10
     // console.log(dividCunt);
            const showpost = employee.slice(count.start, count.end)
            setCurntemp(showpost)
           // console.log("showpost", showpost);
            
    }
    paged()
    },[employee, count])

    const paginationHandler = (direct)=>{
    // console.log(count.end);
     
      if (dividCunt > count.end && direct === 'nxt'){
       setCount(prev => ({...prev, 'start':prev.end , 'end':prev.end + 10})) 
      }
      
      if (count.start > 1  && direct === 'prv' ){
       setCount(prev => ({...prev, 'start':prev.start-10 , 'end':prev.end - 10})) 
      }

    }

    const pagbtn = (num)=>{
   //  console.log(num);
     setCount(prev => ({...prev, 'start':num*10 , 'end':(num*10)+10})) 
      // if (dividCunt > count.end && direct === 'nxt'){
      //  setCount(prev => ({...prev, 'start':prev.end , 'end':prev.end + 10})) 
      // }
      
      // if (count.start > 1  && direct === 'prv' ){
      //  setCount(prev => ({...prev, 'start':prev.start-10 , 'end':prev.end - 10})) 
      // }

    }



  return (
    <div>
        <h1>Employee Data Table</h1>
        <table width='100%' className='table'>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>

<tbody>
            {
              curntemp?.map((value) => {
                return (
            <tr key={value.id}>
                <td>{value.id}</td> <td>{value.name}</td> <td>{value.email}</td> <td>{value.role}</td> 
            </tr>
                )
              })
            }
           </tbody> 
        </table>
        <div className='pagination'>
          <button className='btnside' onClick={()=>paginationHandler('prv')}>Previous</button>
          {Array.from({ length: dividCunt }, (_, index) => (
  <button key={index} className="btn" onClick={()=>pagbtn(index)}>
    {index}
  </button>
))}

          
          <button className='btnside' onClick={()=>paginationHandler('nxt')}>Next</button>
        </div>
    </div>
  )
}

export default Xpagination