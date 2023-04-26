import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { FaFilter } from "react-icons/fa";
import "./shopProducts.scss";
import { useDispatch, useSelector } from 'react-redux';
import { handleSort } from '../../../../store/features/filterSlice';

const ShopProducts = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    const handleSorting = (e) => {
        dispatch(handleSort(e))
    }
    return (
        <div className="shop-products">
            <div className="filter-part d-flex  justify-content-between py-5">
                <button className="general-button">
                    <FaFilter /> <span className='ps-1'>FILTER</span>
                </button>
                <select name="sort-list" id="sort-list" onChange={(e) => { handleSorting(e.target.value) }}>
                    <option value="">Default sorting</option>
                    <option value="Low">Sort by price: low to high</option>
                    <option value="High">Sort by price: high to low</option>
                </select>
            </div>
            <div className="row">
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        oldPrice={item.oldPrice}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShopProducts;