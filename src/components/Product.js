import { useState } from "react"
import { productData } from "../utils/productData"
import Items from "./Items"

//  named export.
export const Product = () => {
    const [data, setdata] = useState(productData)
    return (
        <div>
            <button style={{"marginTop":"10px"}} onClick={()=>{
                const filteredData = productData.filter(product => product.rating >=5)
                console.log(filteredData)
                setdata(filteredData);
            }}>
                Top Rated Product
            </button>
            <div className="product_container">
                {
                    data.map((product, index) => (
                        <Items key={index} itsmychoice={product} />
                    ))
                }
            </div>
        </div>

    )
}