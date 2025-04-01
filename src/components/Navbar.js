import { useState } from "react"

const Navbar = () => {
    const [btnColor,setbtnColor ] = useState("Light")
    return (
        <div className="navbar">
            <h1>Ajio</h1>
            <ul className="menu">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>CART</li>
            </ul>
            <button style={{"margin": "10px", "height":"50px","width":"50px"}} 
            onClick={()=>{
                console.log("clicked");
              btnColor === "Light" ? setbtnColor("Dark") : setbtnColor("Light")  
            }}>{btnColor}</button>
                
        </div>
    )
}
export default Navbar // default export we can only use it once in a file.