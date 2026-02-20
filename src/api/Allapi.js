import axios from "axios"


export const Apiresult = async (apilink)=>{
    try {
    // const res = await axios.get(` https://countries-search-data-prod-812920491762.asia-south1.run.app`)
    const res = await axios.get(apilink)
    console.log(res );    
       if (!res.ok) throw new Error("Network Error");
      //if (res.status !== 200) throw new Error("Network Error");
    return res.data   
    } catch (error) {
        console.error("Error fetching data:", error); 
        alert(error.message)
    return [];   
    }
    
}

// export const allPurpousData = async (apiendpoint)=>{
//     try {
//      const res = await axios.get(apiendpoint)
//        if (!res.ok) throw new Error("Network Error");
//     return res.data   
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     return [];   
//     }
    
// }

export const allPurpousData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network Error");
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};