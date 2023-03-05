import ProductItem from './ProductItem';

import classes from './Products.module.css';

const ProductsList = (props) => {
    const openProductPageHandler = (item) => {
        props.onOpenProductPage(item);
    };
    const mappedList = props.items.map((item) => (
        <ProductItem
            key={item.id}
            item={item}
            onOpenProductPage={openProductPageHandler}
        />
    ));

    return (
        <section className={classes.products}>
            <ul>
                {mappedList}
            </ul>
        </section>
    );
};

export default ProductsList;