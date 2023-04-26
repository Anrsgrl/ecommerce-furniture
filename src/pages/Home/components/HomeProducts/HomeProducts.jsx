import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import "./homeProducts.scss";
import { data } from "../../../../data/data";
const HomeProducts = () => {
    return (
        <div className="home-products page-container">
            <h3 className='text-center part-title'>Our Latest Products</h3>
            <div className="divider-part">
                <div className="divider"></div>
            </div>
            <div className="row">
                {data.slice(0, 4).map((item) => (
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

export default HomeProducts;