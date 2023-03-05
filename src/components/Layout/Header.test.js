import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    const cartButtonText = 'Your Cart';

    test('renders "Your Cart" button', () => {
        render(<Header />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
    test('renders "Your Cart" text', () => {
        render(<Header />);
        const buttonTextElement = screen.getByText(cartButtonText);
        expect(buttonTextElement).toBeInTheDocument();
      });
});
