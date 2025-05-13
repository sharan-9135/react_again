const Items = ({ itsmychoice }) => {
    const { image, name, price, rating, title } = itsmychoice;
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" />
            </div>
            <div className="product-details">
                <h3 className="product-title">{title}</h3>
                <h2 className="product-name">{name}</h2>
                <div className="price-rating-container">
                    <p className="product-price">${price}</p>
                    <div className="product-rating">
                        <span className="stars">{"★".repeat(Math.round(rating.rate))}</span>
                        <span className="rating-text">{rating.rate}/5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;


export const HOF = (Items) => {
    return (itsmychoice) => {
        return (
            <div>
                <span className="sticker">Best seller</span>
                <Items {...itsmychoice} />
            </div>
        )
    }
}