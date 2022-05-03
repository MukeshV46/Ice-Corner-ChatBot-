import './Css/Dfoot.css'
import logo from 'D:/React/my-react-app/src/Dasher/Images/Remini20220430195557951.jpg';
import logo2 from 'D:/React/my-react-app/src/Dasher/Images/WhatsApp Image 2022-04-30 at 7.32.39 PM.jpeg'
import vro from 'D:/React/my-react-app/src/Dasher/Images/vro.jpg'
import Aos from "aos";

import "aos/dist/aos.css";
import risi from 'D:/React/my-react-app/src/Dasher/Images/WhatsApp Image 2022-05-03 at 8.35.47 AM.jpeg'
import { useEffect } from 'react';
const Dfot = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <> 
        <footer>
            <div className='foot'>
                <div id='left-foot'>
                    <h3>Our Contributors  <i class="fas fa-users    "></i> </h3>
                    <div id='cont' data-aos ='fli-up'>
                        <span ><img  src={logo} alt="" /></span>
                        <span><img data-aos ="flip" src={logo2} alt="" id='abi' /></span>
                        <span><img data-aos ="flip" src={risi} alt="" id='rr'/></span>
                    </div>
                </div >
                <div id="right-foot">
                    <h3>2022 © All rights reserved </h3> 
                    <h4>Devloped by Mr.G-Men</h4>  
                </div> 
                <div class="end-foot">
                    <h3>With Support Of <i class="fa fa-flag" aria-hidden="true"></i> </h3>
                    <img src={vro} alt="" />
                </div>
            </div>
        </footer>
        </>
    )
};
export default Dfot;