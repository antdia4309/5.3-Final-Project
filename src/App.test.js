import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

// Mock components that rely on browser-specific APIs
jest.mock('./components/RichmondMap', () => () => <div>Mocked RichmondMap</div>);
jest.mock('./components/ParkingChart', () => () => <div>Mocked ParkingChart</div>);

test('renders ParkingFinder header', () => {
  render(<App />);
  const headerElement = screen.getByText(/ParkingFinder/i);
  expect(headerElement).toBeInTheDocument();
});
