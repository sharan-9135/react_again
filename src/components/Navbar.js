import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import {  userContext } from "../utils/userContext"

const Navbar = () => {
    const [btnColor, setbtnColor] = useState("Light")
    const user = useContext(userContext) /* with the help of this we can access 
    data from global variable  */
    
    return (
        <div className="navbar">
            <h1>Ajio</h1>
            <ul className="menu">
                <li><Link to='/men'>MEN</Link></li>
                <li><Link to='/Women'>Women</Link></li>
                <li><Link to='/kid'>KIDS</Link></li>
                <li><Link to='/Grocery'>GROCERY</Link></li>
                <li>CART</li>
                <li>{user.name}</li>
                
            </ul>
            <button style={{ "margin": "10px", "height": "50px", "width": "50px" }}
                onClick={() => {

                    btnColor === "Light" ? setbtnColor("Dark") : setbtnColor("Light")
                }}>{btnColor}</button>

        </div>
    )
}
export default Navbar // default export we can only use it once in a file.