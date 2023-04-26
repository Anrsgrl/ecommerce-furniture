import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from "../../data/data";

const Product = () => {
    const { id } = useParams();
    console.log(id)
    console.log(data)
    const productDetail = data.find((item) => item.id === id);
    console.log(productDetail)

    return (
        <div className="product page-container">
            {/* <h2>{productDetail.title}</h2> */}
        </div>
    )
}

export default Product;