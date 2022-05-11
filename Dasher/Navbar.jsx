import './Js/Nav.js'
import './Css/Nav.css'
import { Link } from 'react-router-dom';
import logo from "D:/React/my-react-app/src/Dasher/Images/logo.png"
import { useState} from "react";
const DNav = ()=>{
    const [nav,setNavbar] = useState(false);     
    const changeBg=()=>{
        if(window.scrollY>25){
            setNavbar(true);
        }
        else{
        setNavbar(false);        
        } 
    }
    window.addEventListener('scroll',changeBg);
    
    return(
        <>
        <nav >
            <p>2211 NW 2ND AVE, MIAMI, FL 33127</p>
            <div class="Top">
                <i>Icon</i>
                <i>Icon</i>
            </div>
        </nav>
<div className='Nav '>
<div className={nav?'header act':'header '}>
 <a href="" class="logo"><img src={logo} class="logoimg"></img></a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
     <ul class="menu">
        <li><Link to ="/Hour"> <i class="fa fa-user-circle" aria-hidden="true"></i>  Login | SignUp    </Link></li>
        <li><Link to ="/"> <i class="fa fa-home" aria-hidden="true"></i> About</Link></li>
        <li><Link to ="/catring"><i class="fas fa-cookie-bite    "></i> Catering</Link></li>
        <li><Link to ="/contact"> <i class="fa fa-phone" aria-hidden="true"></i> Contact</Link></li>
    </ul>
    </div>
</div>
<div className={nav?'side':''}></div>
        </>
    )
}
export default DNav;