import React from 'react'
import ProductCard from '../../../../components/ProductCard/ProductCard';
import "./homeProducts.scss";
import data from "../../../../data/data";
const HomeProducts = () => {
    return (
        <div className="home-products page-container">
            <h3 className='text-center'>Our Latest Products</h3>
            <div className="divider-part">
                <div className="divider"></div>
            </div>
            <div className="row">
                {data.slice(0, 4).map((item) => (
                    <ProductCard
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        newPrice={item.newPrice}
                        sale={item.sale}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomeProducts