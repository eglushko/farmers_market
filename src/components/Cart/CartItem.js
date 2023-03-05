import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = (props.item.price * props.item.quantity).toFixed(2);
  return (
    <li className={classes['cart-item']}>
        <div className={classes['image-container']}>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <div className={classes.data}>
          <div className={classes.summary}>
            <h2 title={props.item.name}>{props.item.name}</h2>
            <span className={classes.price}>${price}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={props.onRemove}>−</button>
            <span className={classes.quantity}>x {props.item.quantity}</span>
            <button onClick={props.onAdd}>+</button>
            <button className={classes.remove} onClick={props.onRemoveItem}>Remove</button>
          </div>
        </div>
    </li>
  );
};

export default CartItem;
