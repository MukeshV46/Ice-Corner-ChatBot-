import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";


import './Css/Menu.css'
import cur from 'D:/React/my-react-app/src/Dasher/Images/curB.png'
const Menu =()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return(
        <>
        <div className="Menu">
            <div class="MenuItem">
                    <h1>MENU</h1>
                    <img src={cur} alt="" />
                    <p>At Dasher and Crank, we pride ourselves on the uniqueness and freshness of our ice cream. We carry 12 of our Daily Favorite flavors that are anything but ordinary as well as 6 rotating, limited edition flavors. Make sure to give us a call at (646) 714-9039 to check for limited edition offerings.</p>
                    <br />
                    <button>Download PDF</button>
                    <br />
                    <h1 >DAILY FAVOURITES</h1>
                    <br />
                    <p data-aos="fade-up">Our every day flavors are anything but ordinary.
                        Inspired by tastes from around the world
                        and right here in Miami.
                        You'll want to come back everyday to enjoy our staple flavors!
                    </p>
                    <br />
                    <h3>Ⓥ - Vegan</h3>
                    <h4 data-aos="fade-up-right">UBE MACAPUNO Ⓥ</h4>
                    <p>Our Most Popular Flavor!
                    Coconut Ice Cream with Filipino Purple Yams
                    </p>
                    <h4 data-aos="fade-down-right" >SALTY BEACH Ⓥ</h4>
                    <p>Coconut Ice Cream, Sea Salt & Graham Cracker</p>
                    <h4 data-aos="fade-up-right">COCO MOCHA CHIP Ⓥ</h4>
                    <p>Coconut Mocha Ice Cream with and Dark Chocolate Chunks</p>
                    <h4 data-aos="fade-down-right">CHOCOLATE BOMB Ⓥ</h4>
                    <p>Our Chocolate Coconut Base with Chocolate Chunks &
                    Roasted Cocoa Nibs</p>
                    <h4 data-aos="fade-up-right">YŌKO MATCHA Ⓥ</h4>
                    <p>Our partnership with Yōko Matcha.
                    Culinary Matcha in our Vegan Coconut Base</p>
                    <h4 data-aos="fade-down-right">LAVENDER</h4>
                    <p>Lavender Bud infused Ice Cream</p>
                    <h4 data-aos="fade-up-right">BLACK MINT</h4>
                    <p>Peppermint and Activated Charcoal Ice Cream
                    with Dark Chocolate Chunks</p>
                    <h4 data-aos="fade-down-right">LEMON SPECULOOS</h4>
                    <p>Lemon Ice Cream with Belgian Speculoos Cookies</p>   
            </div>
            <div class='Triple'>
            </div>
            <div class="Catering">
                    <div class="ele">
                        <h1>CATERING</h1>
                        <p>Have Your Next Party At Dasher & Crank, Or Let Us Cater Your Next Event! Please Fill Out The Form Below And We'll Be In Touch Shortly.</p>
                        <button>INQUIRE NOW</button>
                    </div>
            </div>
        </div>
        </>
    )
};
export default Menu;
