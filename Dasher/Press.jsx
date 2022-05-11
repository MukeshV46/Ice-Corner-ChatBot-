import './Css/Press.css';
import { useEffect } from 'react';
import img1 from 'D:/React/my-react-app/src/Dasher/Images/ice1.jpg'
import img2 from 'D:/React/my-react-app/src/Dasher/Images/ice2.jpeg'
import img3 from 'D:/React/my-react-app/src/Dasher/Images/ice3.jpeg'
import img4 from "D:/React/my-react-app/src/Dasher/Images/ezgif.com-gif-maker (2).jpg"
import img5 from 'D:/React/my-react-app/src/Dasher/Images/end1.jpg'
import img6 from 'D:/React/my-react-app/src/Dasher/Images/end2.jpg'
import cur from 'D:/React/my-react-app/src/Dasher/Images/curB.png'
import Log from './login';

import Aos from "aos";
import "aos/dist/aos.css";

const Pres =()=>{
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

    return(
        <>
    <Log/>
    <div class="Press">
        <h1>PRESS</h1>
        <img src={cur} alt="" />
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
  
  <div data-aos="flip-up"class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block PresCar " src={img1}  alt="First slide"/>
      <img class="d-block PresCar " src={img4}  alt="First slide"/>
      <img class="d-block PresCar " src={img5}  alt="First slide"/>

    </div>
    <div class="carousel-item">
      <img class="d-block PresCar" src={img2} alt="Second slide"/>
      <img class="d-block PresCar" src={img6} alt="Second slide"/>
      <img class="d-block PresCar" src={img3} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block PresCar" src={img3} alt="Third slide"/>
        <img class="d-block PresCar" src={img2} alt="Second slide"/>
      <img class="d-block PresCar" src={img6} alt="Second slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>
</div>
<div className='hour'>
        <div data-aos="fade-up-right">
            <h1>HOUR & LOCATION</h1>
            <img src={cur} alt="" />
             <a href="">2211 NW 2nd Ave,
            Miami, FL 33127</a>
            <button>GET DIRECTION</button>
            <p>10 AM to 11 PM Sunday - Thursday</p>
            <p>10 AM to 12 AM Saturday & Friday </p>
        </div>
        <img data-aos="fade-down-right" src={img4} alt="" id="mapD"/>
</div>
        </>
    )
} 
export default Pres;