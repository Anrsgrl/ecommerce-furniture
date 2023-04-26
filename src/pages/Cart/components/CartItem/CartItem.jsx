import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../../../store/features/cartSlice';
import { IoIosCloseCircleOutline } from "react-icons/io";


const CartItem = (props) => {
    const { image, title, price, quantity, category, item } = props;
    const dispatch = useDispatch()
    return (
        <div className="row mb-4 d-flex justify-content-around align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                    src={image}
                    className="img-fluid rounded-3" alt="Cotton T-shirt" />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-muted">{category}</h6>
                <h6 className="text-black mb-0">{title}</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                <button className="quantity-button px-2"
                    onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                </button>

                <span className='px-2'>{quantity}</span>

                <button className="px-2 quantity-button"
                    onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                </button>
            </div>
            <div className="col-md-3 col-lg-2 p-0">
                <h6 className="mb-0">£{price * quantity}.00</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <button onClick={() => dispatch(removeItem(item.id))} className='cart-trash'><IoIosCloseCircleOutline /></button>
            </div>
        </div>
    )
}

export default CartItem