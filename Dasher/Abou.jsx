import './Css/About.css'
import cur from 'D:/React/my-react-app/src/Dasher/Images/cur.png'
import hall from "D:/React/my-react-app/src/Dasher/Images/ezgif.com-gif-maker (2).jpg"
import cook from "D:/React/my-react-app/src/Dasher/Images/Remini20220430200504408.jpg"
import { useEffect, useState } from 'react'

import Aos from "aos";
import "aos/dist/aos.css";

const About =()=>{
    const [see,issee] = useState(false);
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])

    return(
        <>
        <div>
            <div data-aos="fade-up" class="wel">
                <h1>WELCOME TO DASHER CRANK</h1>
            </div>
            <div className='abt'>
                <div data-aos="fade-up-right" class="mid">
                    <div  className="mid-abt">
                        <h1>About</h1>
                        <img src={cur} alt="" />
                        <p>Dasher & Crank is a craft ice cream shop located in the heart of Wynwood. All of our artisan flavors are made in-house from scratch using local and premium ingredients. Making everything in small-batches allows us to be creative and rotate our menu constantly. In our first year of operation, we have created over 425 flavors and release new flavors each week. Come by today to see what new and exciting flavors we are scooping this week!</p>
                    </div>
                    <img  data-aos="fade-down-right" src={hall} alt="" class="hall"/>
                </div>
                <div data-aos ="fade" class="mid-1">
                    <img src={cook} id="cook" alt="" />
                    <h3>EXECUTIVE PASTRY CHEF DANIEL NEGRON</h3>
                    <p>Chef Jhonny is the head pastry chef of Dash & Crank.</p>
                    <br />
                    <p>Chef Daniel attended Johnson & Wales University where he received his A.S. degree in Baking & Pastry Arts as well as his B.S. degree in Food Service Management. </p>
                    <p>Apart from his education, Chef Daniel brings an array of exper…</p>
                    <p  id="se">See More...</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;
