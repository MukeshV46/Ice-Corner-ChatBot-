import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Css/login.css";
import logo from "D:/React/my-react-app/src/Dasher/Images/login.png";
import { useState } from "react";

import IceBot from "./Icebot";
import ClickOrd from "./ViewOrder";


const Log = ()=>{
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    const [phn,setPhn] = useState('');
    const[Add,setAdd] = useState('');
    
    
    const [active,setActive] = useState(false);
    const[user,setUser] = useState('Buddy')
    
    const[data,setData] = useState(null)
    useEffect(()=>{
      Aos.init({duration:2000});
    
    },[])    
    const check=(e)=>{
      e.preventDefault(); // No need
      fetch('http://localhost:3000/user')
     .then(res => {return res.json()})                
     .then((arr)=>{
         // Validate
         let succ= false;        
         let i =0;
         while(i<arr.length){
             if(name===arr[i].name && pass===arr[i].pass){
                 succ = true ;
                 
                 break;
             }
             else{
                 succ=false;
             }     
             i++;
         } 
         if(succ){
             alert("SuccessFully Logged in");  
              setUser(arr[i].name);
              setActive(true);
              setData(arr)     
              console.log(user);
             //  console.log(data);
         } 
         else alert("Dont have Account");   
     })        
 }
    
    
    const handleSUbmit = (e)=>{
        const UserData = {name,pass,phn,Add};

        fetch('http://localhost:3000/user',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(UserData)
        }).then( ()=>{
            alert("account created");
        }
        );

    }
    return (    
    <>
    

    {active && <div><IceBot  /></div> }
    

    <br />
    <br />
    <br />
    <p></p>
    <br />
    <h2>Welcome {user}</h2>
    <br />
     {active && <ClickOrd  name={name}/>} 
     <br />
    <div data-aos="flip-left"className="valid_box">
    <div class="valid">
         <img src={logo} alt="Log" />
        <div>
            <a class="login-trigger" href="#" data-target="#login" data-toggle="modal">Login</a>
            <a class="signIn-trigger" href="#" data-target="#signIn" data-toggle="modal">Sign Up</a>
        </div>
    </div>
 </div>
      
 <div id="login" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <button data-dismiss="modal" class="close">&times;</button>
        <h4 id="log_h">Login</h4>
        <form onSubmit={check}>
          
          <input
          type="text" 
          name="username" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          class="username form-control" 
          placeholder="Username"/>

          <input type="password"
          name="password" 
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
          class="password form-control"
          placeholder="password"/>
          <input class="btn login" type="submit" value="Login" />
        </form>
      </div>
    </div>
  </div>  
</div>


{/* Sign up data  */}
<div id="signIn" class="modal fade" role="dialog" onSubmit={handleSUbmit}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <button data-dismiss="modal" class="close">&times;</button>
        <h4 id="log_h">Sign Up</h4>
        <form>
          <input  
          type="text" required name="username" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          class="username form-control" 
          placeholder="Username"/>
          
          <input 
          type="password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
          required name="password"
          class="password form-control" 
          placeholder="password"/>
          
          <input type="text"  
          name="Address" 
          value={Add}
          onChange={(e)=>setAdd(e.target.value)}
          class="username form-control" 
          placeholder="Address"/>

          <input type="number" 
          name="Mobl_no" 
          value={phn}
          onChange={(e)=>setPhn(e.target.value)}
          class="username form-control" 
          placeholder="Phone No: +91XXXXXXXXX"/>

          <input class="btn login" type="submit" value="signIn" />
        </form>
      </div>
    </div>
  </div>  
  
</div>
    </>
    )
};

export default Log;