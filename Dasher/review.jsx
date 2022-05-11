import axios from "axios";
import { useEffect } from "react";

import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import ShowOrd from "./ShowOrder";
import { useState } from "react";
import UseFetch from "./UseFetch";
import { render } from "@testing-library/react";
const OrderDet = ()=>{
 const{name} = useParams();
 const [data, setdata] = useState(null);      

useEffect(()=>{
  fetch(`http://localhost:3000/orders?name=${name}`)
  .then(res=>{return res.json()})
  .then(arr=>{    
    setdata(arr)
  })
},[])

  return(     
    <>
      <br/>
      <br/>            
      <h1> Holla! {name}</h1> 
     
      <h2>Your orders are</h2>
      { data && <ShowOrd sata={data} name={name}/>}                  
                
    </>
  )  
}    
  
export default OrderDet;



























































