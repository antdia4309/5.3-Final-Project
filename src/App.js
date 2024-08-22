import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import RichmondMap from './components/RichmondMap';
import ReservationDetails from './components/ReservationDetails';
import ParkingChart from './components/ParkingChart';

function App() {
  const [reservationDetails, setReservationDetails] = useState('');
  
  const [parkingData, setParkingData] = useState([
    { location: 'Shockoe Bottom', availableSpots: 7 },
    { location: 'The Fan', availableSpots: 2 },
    { location: 'Scotts Addition', availableSpots: 10 },
  ]);

  const handleReserveSpot = (locationName) => {
    setParkingData(prevData =>
      prevData.map(spot =>
        spot.location.toLowerCase() === locationName.toLowerCase() && spot.availableSpots > 0
          ? { ...spot, availableSpots: spot.availableSpots - 1 }
          : spot
      )
    );

    const reserveSpot = parkingData.find(spot => spot.location.toLowerCase() === locationName.toLowerCase());

    if (reserveSpot) {
      setReservationDetails(`Spot reserved at ${reserveSpot.location}. Remaining spots: ${reserveSpot.availableSpots - 1}`);
    } else {
      console.error('No spot found with location: ', locationName);
      setReservationDetails('Reservation failed: Location not found or no available spots.');
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <SearchForm parkingData={parkingData} setReservationDetails={setReservationDetails} onReserveSpot={handleReserveSpot}/>
        <RichmondMap />
        <ReservationDetails details={reservationDetails} />
        <ParkingChart data={parkingData} />
      </main>
    </div>
  );
}

export default App;
