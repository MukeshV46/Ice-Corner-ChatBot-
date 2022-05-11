import './Css/Order.css'
import { Link } from "react-router-dom";
const ClickOrd = ({name})=>{
    
    return(
        <>
        <Link to={`/Order/${name}`}>
            <button id='checkOrd'>View Order {name}</button>
        </Link>
        <br />
        </>
    )
}

export default ClickOrd;