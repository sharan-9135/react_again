import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState(null);
    const {productId} = useParams();
    
    useEffect(() => {
        fetchSingleProductDetails();
    },);

    const fetchSingleProductDetails = async () => {
        const details = await fetch(`https://fakestoreapi.com/products/${productId}`); 
        const dataInJsonFormat = await details.json();
        setSingleProduct(dataInJsonFormat);
    };
    if (singleProduct == null) return <Skeleton />;

    const { image, title, price, rating, description } = singleProduct;

    return (
        <div className="product-details-container">
            <div className="product-image-wrapper">
                <img src={image} alt={title} className="product-image" />
            </div>
            <div className="product-info">
                <h1 className="product-title">{title}</h1>
                <div className="product-rating">
                    <span className="stars">{"★".repeat(Math.round(rating.rate))}</span>
                    <span>({rating.count} reviews)</span>
                </div>
                <p className="product-price">${price}</p>
                <p className="product-description">{description}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;