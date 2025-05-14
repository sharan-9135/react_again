import { useState } from "react"
import Accordian from "./Accordian"

const Men = ()=>{
    const [open,setOpen] = useState(null) // by default all close.
    return (
        <div>
            <h1>Filter Option</h1>
            {
    ['BRAND', 'Mens', 'Women', 'Kids'].map((title, index) => (
        <Accordian
            key={index}
            title={title}
            open={index === open}
            set={() => setOpen(index)}
        />
    ))
}

            
           
        </div>
    )
}
export default Men