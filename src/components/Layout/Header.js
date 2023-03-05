import { Fragment, useContext } from 'react';

import cartIcon from '../../assets/shopping-cart-icon-48.png';
import CartContext from '../../store/CartContext';
import classes from './Header.module.css';


const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const numOfCartItems = cartCtx.cartItems.reduce((curNum, item) => {
        return curNum + item.quantity;
    }, 0);
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>🍎 <span className={classes.title}>Farmers Market</span></h1>
                <button className={classes.button} onClick={props.onOpenCart}>
                    <span className={classes.icon}><img src={cartIcon} alt="Cart" /></span>
                    <span>Your Cart</span>
                    <span className={classes.badge}>{numOfCartItems}</span>
                </button>
            </header>
        </Fragment>
    );

};

export default Header;
