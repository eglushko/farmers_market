import { render, screen } from '@testing-library/react';
import Products from './Products';

describe('Products component', () => {
    test('sends request', () => {
        render(<Products />);
        const loading = screen.getByText('loading', {exact: false});
        expect(loading).toBeInTheDocument();
    });

    test('renders products if request succeeds, using ProductList, ProductItem and ProductItemForm components', 
        async function() {
            window.fetch = jest.fn();
            window.fetch.mockResolvedValueOnce({
                json: async () => [
                    {
                    "id":"1e780016-94ef-4063-9fbb-fbafbabb636e",
                    "name":"Crate of Corn",
                    "description":"Shucked full of love and TLC! You're gonna want a whole bunch of them!",
                    "image":"https://sweet-apple-acres.netlify.app/images/crate-of-corn.jpg",
                    "price":25,
                    "rating":4.8,
                    "releated":[],
                    "isAvailable":true
                    },    
                    {
                    "id":"1a264ead-e650-41f1-aa96-2b6efafa2011","name":"Crate of Grapes",
                    "description":"The sweetest darn grapes you ever did taste!",
                    "image":"https://sweet-apple-acres.netlify.app/images/crate-of-grapes.jpg",
                    "price":20,
                    "rating":4.7,
                    "releated":[],
                    "isAvailable":false
                    }
                ]
            });
            render(<Products />);
            const listItemElements = await screen.findAllByRole('listitem');
            expect(listItemElements).not.toHaveLength(0);
    });
});