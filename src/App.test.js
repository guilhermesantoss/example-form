import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tag h1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Exemplo de Formulário com react-hook-form e yup/i);
  expect(linkElement).toBeInTheDocument();
});
