import axios from "axios"


export const Apiresult = async (apiendpoint)=>{
    try {
     const res = await axios.get(`https://xcountries-backend.labs.crio.do/${apiendpoint}`)
    return res.data   
    } catch (error) {
        console.error("Error fetching data:", error);
    return [];   
    }
    
}