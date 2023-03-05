import { useRef, useState } from 'react';
import Input from '../UI/Input';

import classes from './ProductItem.module.css';

const ProductItemForm = (props) => {
    const quantityInputRef = useRef();
    const [quantityIsValid, setQuantityIsValid] = useState(true);
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const enteredQuantity = quantityInputRef.current.value;
        if (enteredQuantity.trim().length === 0 || enteredQuantity < 1) {
            setQuantityIsValid(false);
            return;
        }
        const enteredQuantityNumber = +enteredQuantity;
        props.onAddToCart(enteredQuantityNumber);
    }
    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input label="Quantity" ref={quantityInputRef} input={{
                id: 'quantity_' + props.id, 
                type: 'number',
                min: '1',
                max: '100',
                step: '1',
                defaultValue: '1'
                }} />
            {!quantityIsValid && <p>Quantity is invalid.</p>}
            <button>Add <span className={classes.long}>to Cart</span></button>
        </form>
    );
};

export default ProductItemForm;

