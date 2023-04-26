import React, { useState } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import data from "../../../../data/data";
import { FaFilter } from "react-icons/fa";

const ShopProducts = () => {
    const [products, setProducts] = useState([...data]);
    function handleSort(e) {

        if (e.target.value === "Low") {
            setProducts([...data.sort((a, b) => a.price > b.price ? 1 : -1)])
        } else if (e.target.value === "High") {
            setProducts([...data.sort((a, b) => a.price < b.price ? 1 : -1)])
        } else {
            setProducts([...data.sort((a, b) => a.id > b.id ? 1 : -1)])
        }

    }

    return (
        <div className="shop-products">
            <div className="filter-part d-flex  justify-content-between py-5">
                <button className="general-button">
                    <FaFilter /> <span className='ps-1'>FILTER</span>
                </button>
                <select name="sort-list" id="sort-list" onChange={(e) => { handleSort(e) }}>
                    <option value="">Default sorting</option>
                    <option value="Low">Sort by price: low to high</option>
                    <option value="High">Sort by price: high to low</option>
                </select>
            </div>
            <div className="row">
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        sale={item.sale}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShopProducts