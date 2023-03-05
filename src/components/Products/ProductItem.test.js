import { render, screen } from '@testing-library/react';
import ProductItem from './ProductItem';

describe('ProductItem component', () => {
  test('rendered a button for an available item', () => {
    const item = {
        "id":"1e780016-94ef-4063-9fbb-fbafbabb636e",
        "name":"Crate of Corn",
        "description":"Shucked full of love and TLC! You're gonna want a whole bunch of them!",
        "image":"https://sweet-apple-acres.netlify.app/images/crate-of-corn.jpg",
        "price":25,
        "rating":4.8,
        "releated":[],
        "isAvailable":true
    };
    render(<ProductItem key={item.id} item={item} />);
    const buttonElement = screen.getByRole('button');
    const messageElement = screen.queryByText('Currently unavailable', {exact: false});
    expect(buttonElement).toBeInTheDocument();      
    expect(messageElement).not.toBeInTheDocument();      
  });
  test('rendered "Currently unavailable" text for an unavailable item', () => {
    const item = {
        "id":"1e780016-94ef-4063-9fbb-fbafbabb636e",
        "name":"Crate of Corn",
        "description":"Shucked full of love and TLC! You're gonna want a whole bunch of them!",
        "image":"https://sweet-apple-acres.netlify.app/images/crate-of-corn.jpg",
        "price":25,
        "rating":4.8,
        "releated":[],
        "isAvailable":false
    };
    render(<ProductItem key={item.id} item={item} />);
    const messageElement = screen.getByText('Currently unavailable', {exact: false});
    const buttonElement = screen.queryByRole('button');
    expect(messageElement).toBeInTheDocument();      
    expect(buttonElement).not.toBeInTheDocument();      
  });

});