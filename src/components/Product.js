import { useEffect, useState } from "react"
import Items from "./Items"
import Skeleton from "./Skeleton";

export const Product = () => {
    const [data, setData] = useState([])
    const [displayData, setDisplayData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const dataInJsonFormate = await data.json();
        setData(dataInJsonFormate);
        setDisplayData(dataInJsonFormate);
    }

    const handleSearch = () => {
        const filtered = data.filter(product => 
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayData(filtered);
    }

    const filterTopRated = () => {
        const filtered = data.filter(product => product.rating.rate >= 4);
        setDisplayData(filtered);
    }

    return data.length === 0 ? <Skeleton/> : (
        <div>
            <div style={{ marginTop: "10px" }}>
                <input 
                    type="text" 
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <button 
                style={{ marginTop: "10px" }} 
                onClick={filterTopRated}
            >
                Top Rated Product
            </button>
            
            <div className="product_container">
                {displayData.map((product, index) => (
                    <Items key={index} itsmychoice={product} />
                ))}
            </div>
        </div>
    )
}