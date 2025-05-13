import { useEffect, useState } from "react"

const useGetSingleProduct = (productId)=>{
    const[singleProduct, setSingleProduct] = useState(null);
    useEffect(()=>{
        fetchSingleProduct();
    },[])
    const fetchSingleProduct = async ()=>{
         const fetchData = await fetch(`https://fakestoreapi.com/products/${productId}`)
         const jsonData = await fetchData.json()
         setSingleProduct(jsonData)

    }
    
    return singleProduct;
}
export default useGetSingleProduct