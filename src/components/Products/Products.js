import { useEffect, useState, useCallback, Fragment } from 'react';

import ProductsList from './ProductsList';
import ProductPage from './ProductPage';

import classes from './Products.module.css';

const Products = (props) => {
    const fetchProductsCall = './data/products.json'; 
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productPageState, setProductPageState] = useState({
        isOpen: false,
        activeItem: null
    });
    const openProductPageHandler = (item) => {
        setProductPageState({
            isOpen: true,
            activeItem: item
        });
    };

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
              fetch(fetchProductsCall)    
                .then((res) => res.json())
                .then((data) => {
                    setIsLoading(false);
                    setProducts(data);
                });
        }
        catch (error) {
            setError(error.message);
        }
    }, []);

    useEffect(() => {
        let isApiSubscribed = true;
        fetchProducts();
        return () => {
            isApiSubscribed = false;
        }
    }, [fetchProducts]);

    const closeProductPageHandler = () => {
        setProductPageState({
            isOpen: false,
            activeItem: null    
        });
    };


    let content = <p className={classes.message}>No products found.</p>;
    if (products.length > 0) {
        content = <ProductsList items={products}  onOpenProductPage={openProductPageHandler} />;
    }
    
    if (error) {
        content = <p className={classes.message}>{error}</p>;
    }
    
    if (isLoading) {
        content = <div className={classes.message}>Loading...</div>;
    }
        
    return (
        <Fragment>
            {productPageState.isOpen && <ProductPage 
                item={productPageState.activeItem} 
                onClose={closeProductPageHandler} />}
            {content}
        </Fragment>
    );
};

export default Products;