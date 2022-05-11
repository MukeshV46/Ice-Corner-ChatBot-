import { useHistory } from "react-router-dom";
import vanila from 'D:/React/my-react-app/src/Dasher/Images/Vanila.jpg'
import blue from 'D:/React/my-react-app/src/Dasher/Images/Blue.jpg'
import choco  from 'D:/React/my-react-app/src/Dasher/Images/Chocolate.jpg'
import './Css/Order.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ShowOrd = (prop)=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    const history = useHistory();
    let data  = prop.sata;
    console.log(data);
    const PayFor = ()=>{
        prompt("Pay The money");
    }
    const handleDel = (id)=>{        
        fetch(`http://localhost:3000/orders/${id}`,{method:'DELETE'})
        .then(alert('Order Deleted')).
        then(history.push(`/Hour`));
    }
    return(
        <>
        
        <div class="item_ord">
        { 
            data.map((key)=>(
            <>
            <div data-aos="fade-up-right" className="items_box">
               <div className="item_ele" data-aos="flip-up">
                { (key.Flavour === "Vanila") && <img src={vanila} alt="Vanila" /> }
                { (key.Flavour === "Chocolate") && <img src={choco} alt="Chocolate" /> }
                { (key.Flavour === "BlueBerry") && <img src={blue} alt="Blue Berry" /> }
                <p>Type - {key.Type} </p>
                <p>Flavour - {key.Flavour}</p>
                <p>{key.count} - {key.size}</p> 
                <button id ="del" onClick={()=>handleDel(key.id)}>Delete Order</button>
                <br />
                {(key.paid === "Paid") && <button id="paid">Paid <i class="fa fa-check-circle" aria-hidden="true"></i>  </button>}
                {(key.paid === "NotPaid") && <button id="N_paid"onClick={()=>PayFor()} >Not Paid <i class="fa fa-times-circle"  aria-hidden="true"></i></button>}
               </div>
            </div>
            </>
            
        ))                
       }
       </div>
        </>
    )
}
export default ShowOrd;