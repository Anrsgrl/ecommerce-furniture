import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../../../store/features/cartSlice';
import { IoIosCloseCircleOutline } from "react-icons/io";


const CartItem = (props) => {
    const { image, title, price, quantity, category, item } = props;
    const dispatch = useDispatch()
    return (
        <div class="row mb-4 d-flex justify-content-around align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                    src={image}
                    class="img-fluid rounded-3" alt="Cotton T-shirt" />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
                <h6 class="text-muted">{category}</h6>
                <h6 class="text-black mb-0">{title}</h6>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                <button class="quantity-button px-2"
                    onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                </button>

                <span className='quabtity px-2'>{quantity}</span>

                <button class="px-2 quantity-button"
                    onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                </button>
            </div>
            <div class="col-md-3 col-lg-2 p-0">
                <h6 class="mb-0">£{price * quantity}.00</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button onClick={() => dispatch(removeItem(item.id))} className='cart-trash'><IoIosCloseCircleOutline /></button>
            </div>
        </div>
    )
}

export default CartItem