import { useEffect, useState } from "react"
// import { productData } from "../utils/productData"
import Items from "./Items"

//  named export.
export const Product = () => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        fetchDataFromApi();
    },[]);

    const fetchDataFromApi = async ()=>{
        const data = await fetch("https://fakestoreapi.com/products");
        const dataInJsonFormate =  await data.json();
            setdata(dataInJsonFormate);
    }
    return (
        <div>
            <button style={{"marginTop":"10px"}} onClick={()=>{
                const filteredData = data.filter(product => product.rating.rate >=4)
                // console.log(filteredData)
                setdata(filteredData);
            }}>
                Top Rated Product
            </button>
            <div className="product_container">
                {
                    data.map((product, index) => (
                        <Items key={index} itsmychoice={product}/>
                    ))
                }
            </div>
        </div>

    )
}