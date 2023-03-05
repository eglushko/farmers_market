import { useContext } from 'react';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../store/CartContext';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const price = props.item.price.toFixed(2);
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (quantity) => {
        cartCtx.addItem({
            id: props.item.id,
            image: props.item.image,
            name: props.item.name,
            quantity: quantity,
            price: props.item.price
          });
    };
    const openProductPageHandler = () => {
        props.onOpenProductPage(props.item);
    };
    return (
        <li className={classes['product-item']}>
            <div className={classes['image-container']} onClick={openProductPageHandler}>
                <img src={props.item.image} alt={props.item.name} />
            </div>
            <h3 onClick={openProductPageHandler}>{props.item.name}</h3>
            <div className={classes['product-item-price']}>${price}</div>
            {props.item.isAvailable && <ProductItemForm id={props.item.id} onAddToCart={addToCartHandler} />}
            {!props.item.isAvailable && <div className={classes.availability}>Currently unavailable</div>}
        </li>
    );
};

export default ProductItem;

