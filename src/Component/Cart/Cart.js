import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props;

let total =0;
let shipping = 0;
for (const product of cart){
    total = total + product.price;
    shipping = shipping + product.shipping;
}
const tax = (total * 0.01).toFixed(2);
const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Item: {props.cart.length}</p>
                <p>Total Price: {total}</p>
                <p>Shipping: {shipping}</p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {(grandTotal).toFixed(2)}</h5>
        </div>
    );
};

export default Cart;