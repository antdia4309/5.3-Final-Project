import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ parkingData, setReservationDetails, onReserveSpot }) {
  const [location, setLocation] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [reserved, setReserved] = useState(false);
  const [reservationStatus, setReservationStatus] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
    setError(false);
    setErrorMessage(false);
    setSearchMessage('');
    setReservationStatus('');
  };

  const handleFindParking = () => {
    if (!location.trim()) {
      setError(true);
      setErrorMessage('Please enter a location.');
      return;
    }

    setError(false);
    setErrorMessage('');

    const spot = parkingData.find(spot => spot.location.toLowerCase() === location.trim().toLowerCase());

    if (spot) {
      if (spot.availableSpots > 0) {
        setSearchMessage(`Spot found at ${spot.location}.`);
      } else {
        setSearchMessage(`No available spots at ${spot.location}.`);
      }
    } else {
      setSearchMessage('Location not found.');
    }
  };

  const handleReserveSpot = () => {
    if (!location.trim()) {
      setError(true);
      setErrorMessage('Please enter a location.');
      return;
    }

    setError(false);
    setErrorMessage('');
    console.log('Reserving spot for:', location);
    setReserved(true);
    setReservationStatus(<strong>Reservation Complete!</strong>);
    onReserveSpot(location);
  
    const details = {
      location: location,
      time: new Date().toLocaleString(), // Capture the current time
      spots: 1,
      price: 10, 
      confirmationNumber: Math.floor(Math.random() * 1000000), // Random confirmation number
    };
  
    setReservationDetails(details);
  };
  
  const handleCancelReservation = () => {
    console.log('Cancelling reservation for:', location);
    setReserved(false);
    setReservationStatus(<strong>Reservation has been cancelled</strong>);
    setReservationDetails(null);
    setSearchMessage('');
  };

  return (
    <div className="search-form-container">
      <section className="search-form">
        <div className="search-content">
          <input
            type="text"
            value={location}
            className={error ? 'input-error' : ''}
            onChange={handleInputChange}
            placeholder="Enter location (e.g. Scotts Addition)"
          />
          {error && <p className="error-message" style={{ fontWeight: 'bold' }}>{errorMessage}</p>}
          {searchMessage && <p className="search-message" style={{ fontWeight: 'bold' }}>{searchMessage}</p>}

          <button onClick={handleFindParking} disabled={reserved}><strong>Find Parking</strong></button>
          <button onClick={handleReserveSpot} disabled={reserved || error || errorMessage || !searchMessage.includes('Spot found')}><strong>Reserve Spot</strong></button>
          <button onClick={handleCancelReservation} disabled={!reserved}><strong>Cancel Reservation</strong></button>
          {reservationStatus && <p className="reservation-status">{reservationStatus}</p>}
        </div>
      </section>
    </div>
  );
}

export default SearchForm;
