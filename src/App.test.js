import { render } from '@testing-library/react';
import App from './App';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';

describe('App component', () => {
  test('Header component rendered properly', () => {
    const tree = render(
      <App>
      <Header />
      <Products />
      </App>
    ); 
    expect(tree).toMatchSnapshot();
  });
});
