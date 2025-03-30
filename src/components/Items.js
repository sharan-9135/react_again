const Items = ({ itsmychoice }) => {
    // console.log(props) // gives ans object.or we can also use.
    const { image, name, price, rating } = itsmychoice
    return (
        <div className="card">
            <img src={image}></img>
            <h1>{name}</h1>
            <p>price : {price}</p>
            <p>rating {rating}/5</p>
        </div>
    )
}
export default Items; // default export we can only use it once in a file.