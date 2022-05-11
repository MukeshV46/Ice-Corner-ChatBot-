// Custom Hook for Use fetch 
import { useState,useEffect } from "react";

const UseFetch = (url)=>{
    const [Data,setData] = useState([]);
    const [isPending,statusPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
     const Abort = new AbortController();
      setTimeout( ()=>{
        fetch(url,  {signal:Abort.signal})
        .then(res=>{
            if(!res.ok){
                throw Error("Sorry we Couldn't fetch");
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);            
            statusPending(false);
            setError(null);
            
        })
        .catch((err)=>{
            if(err.name==="AbortError"){
                console.log("Fetch Aborted");
            }
            else{
            statusPending(false);
            setError(err.message);
            }
        })
      },0);
      return()=>  Abort.abort();
    },[url]);
    
    return {Data,isPending,error};
}
export default UseFetch;

