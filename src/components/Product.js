import { productData } from "../utils/productData"
import Items from "./Items"

//  named export.
 export const Product = () => {
    return (
        <div className="product_container">
            {
                productData.map((product,index) => (
                    <Items key={index} itsmychoice={product} />
                ))
            }
        </div>

    )
}