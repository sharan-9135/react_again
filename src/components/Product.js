import { useEffect, useState } from "react"
import Items, { HOF } from "./Items"
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const Product = () => {
    const [data, setData] = useState([])
    const [displayData, setDisplayData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchDataFromApi();
    },[]);

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

     const HOFcomp = HOF(Items)
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
                {displayData.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        {
                            product.rating.rate >=4 ? <HOFcomp itsmychoice={product}/> : <Items  itsmychoice={product} />
                        }
                    </Link>
                ))}
            </div>
        </div>
    )
}