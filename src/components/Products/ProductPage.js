import { useContext } from 'react';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import classes from './ProductPage.module.css';

const ProductPage = (props) => {
    const item = props.item;
    const price = props.item.price.toFixed(2);
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (quantity) => {
        const item = props.item;
        item.quantity = quantity;
        cartCtx.addItem(item);
    };
    return (
        <Modal item={item} onClose={props.onClose}>
            <div className={classes.product}>
                <div className={classes.main}>
                    <div className={classes.image}>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className={classes.info}>
                        <div className={classes.name}>
                            <h2 title={item.name}>{item.name}</h2>
                        </div>
                        <div><h2>${price}</h2></div>
                        <div className={classes.rating}>
                            <div className={classes.text}>{item.rating} out of 5</div>
                            <div className={classes.stars} style={{'--rating': item.rating}} aria-label="Rating of this product is 2.3 out of 5."></div>
                        </div>
                        {!props.item.isAvailable && <div className={classes.availability}>Currently unavailable</div>}
                    </div>
                </div>
                <div className={classes.details}>
                    <div>{item.description}</div>
                </div>
                <div className={classes.actions}>
                    {props.item.isAvailable && <ProductItemForm id={props.item.id} onAddToCart={addToCartHandler} />}
                    <button className={classes.close} onClick={props.onClose}>Close</button>
                </div>
            </div>
        </Modal>
    );
};

export default ProductPage;