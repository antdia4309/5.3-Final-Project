import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

jest.mock('./components/RichmondMap', () => () => <div />);
jest.mock('./components/ParkingChart', () => () => <div />);

test('cancelling a reservation restores the previously consumed spot', async () => {
  render(
    <App initialParkingData={[{ location: 'Test Location', availableSpots: 1 }]} />
  );

  const input = screen.getByPlaceholderText(/enter location/i);
  const findButton = screen.getByRole('button', { name: /find parking/i });
  const reserveButton = screen.getByRole('button', { name: /reserve spot/i });
  const cancelButton = screen.getByRole('button', { name: /cancel reservation/i });

  await userEvent.type(input, 'Test Location');
  await userEvent.click(findButton);
  await userEvent.click(reserveButton);
  await userEvent.click(cancelButton);
  await userEvent.click(findButton);

  expect(screen.getByText(/spot found at test location/i)).toBeInTheDocument();
});
