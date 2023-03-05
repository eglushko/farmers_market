import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const itemsInTheCart = cartCtx.cartItems.length > 0;
    const placeOrderCall = 'https://sweet-apple-acres.netlify.app/.netlify/functions/api/orders';

    const addItemToCartHandler = (item) => {
        cartCtx.addItem({...item, quantity: 1})
    };
    const removeItemFromCartHandler = (itemId, itemQuantity) => {
        cartCtx.removeItem(itemId, itemQuantity);
    };
    const  placeOrderHandler = () => {
        const customer = {
            name: 'Etana Glushko',
            address: "Fluttershy's Cottage, The Edge of the Everfree Forest"
        };
        const itemsToSend = cartCtx.cartItems.map(item => {
            return {
                productId: item.id,
                quantity: item.quantity
            };
        });
        const postData = {
            name: customer.name,
            deliveryAddress: customer.address,
            items: itemsToSend
        };
        sendOrdersRequest(postData);
    
    };

    async function sendOrdersRequest(postData) {
        const response = await fetch(placeOrderCall, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'                
            }
        });
        const data = await response.json();
        if (data) {
            // todo: notify the customer
        }
    }

    const mappedCartItems = cartCtx.cartItems.map(item => 
        <CartItem 
            key={item.id} 
            item={item} 
            onAdd={addItemToCartHandler.bind(null, item)} 
            onRemove={removeItemFromCartHandler.bind(null, item.id, 1)}
            onRemoveItem={removeItemFromCartHandler.bind(null, item.id, item.quantity)}
        />
    );

    return (
        <Modal onClose={props.onClose}>
            <h1>{!itemsInTheCart && <span>Your </span>}Shopping Cart{!itemsInTheCart && <span> is empty.</span>}</h1>
            <ul className={classes['cart-items']}>
                {mappedCartItems}
            </ul>
            <div className={classes.total}>
                <span className={classes.text}>Total: </span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose}>Close</button>
                {itemsInTheCart && <button onClick={placeOrderHandler}>Place Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;