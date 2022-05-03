import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";

import './Css/Contact.css'
import { useState } from 'react';


const ContactS =()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [phn,setPhn] = useState('');
    const[email,setMail] = useState('');
    const[org,setOrg] = useState('');
    const[feed,setFeed] = useState('');

    const handleSUbmit = (e)=>{
        
        const feefBack = {first,last,phn,email,org,feed};

        fetch('http://localhost:3000/form',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(feefBack)
        }).then( ()=>{
            alert("Form Submitted");
        }
        );
    }
    return(
        <>
    <div class="Col-1">
        <div class="inner">
            <h1>We’d Love to Connect</h1>
            <p>Just drop us a line or <br/> visit our social media pages</p>
        </div>
    </div>
    <form  onSubmit={handleSUbmit}>
    <div class="cont">
         <div class="contact">
              <div data-aos="fade-up-right" class="Cont_left">
                    <h4>Send Message</h4>
                    <hr/>
                    <div class="Cont_inputs">
                      <div class="Cont_doubles">
                        <input 
                        type="text" 
                        name=""
                        placeholder="First Name"
                        required
                        value={first}
                        onChange={(e)=>setFirst(e.target.value)}
                        id=""/>
                        <input type="text" 
                        name="" 
                        placeholder="Last Name" 
                        required
                        value={last}
                        onChange={(e)=>setLast(e.target.value)}
                        id=""/>
                      </div>
                      <div class="Cont_doubles">
                        <input type="number" 
                        required
                        value={phn}
                        onChange={(e)=>setPhn(e.target.value)}
                        placeholder="Phone" />
                        <input type="email"
                        required
                        value={email}
                        onChange={(e)=>setMail(e.target.value)}
                        placeholder="Email"/>
                      </div>
                      <input type="text" 
                      required
                      value={org}
                      onChange={(e)=>setOrg(e.target.value)}
                      placeholder="Organization" 
                      name="" id=""/>

                      <textarea name="" id=""
                       cols="30" rows="6" 
                       required
                       value={feed}
                       onChange={(e)=>setFeed(e.target.value)}
                       placeholder="How Can We Help?"/>
                      <div class="Cont_left-end">
                        <button>Submit</button>
                      </div>
                    </div>
              </div>
              <div class="right" data-aos="fade-down-right" >
                   <h4>Contact Info</h4>
                   <hr/>
                   <div class="info">
                       <p>Airtel Digital Limited <br/>
                        Plot No. 16 <br/>
                        Udyog Vihar Phase IV <br/>
                        Gurgaon – 122015</p>
                        <p>Corporate Identity Number: <br/> U74140DL2015PLC275325</p>
                        <h5>Write to us</h5> <br/>
                        <small><i class="fa fa-podcast" aria-hidden="true"></i> contact@wynk.in</small> <br/>
                        <p>If you have any feedback or concerns with respect to any content available on Airtel Digital Ltd., please contact us here</p>
                        <div class="icons" >
                            <div class="outer">
                                <i class="fab fa-facebook" aria-hidden="true"></i>
                            </div>
                            <div class="outer">
                                <i class="fab fa-instagram" aria-hidden="true"></i>
                            </div>
                            <div class="outer">
                                <i class="fab fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div class="outer">
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                            </div>
                        </div>
                   </div>
              </div>
         </div>
    </div>
    </form>
</>
    )
}
export default ContactS;
