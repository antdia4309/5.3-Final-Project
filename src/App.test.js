import { render, screen } from '@testing-library/react';

jest.mock('./components/RichmondMap', () => () => null);
jest.mock('./components/ParkingChart', () => () => null);

import App from './App';

test('renders header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/ParkingFinder/i);
  expect(headerElement).toBeInTheDocument();
});
