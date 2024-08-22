import React from 'react';
import './ReservationDetails.css';

function ReservationDetails({ details }) {
  return (
    <section className="reservation-details">
      <h2>Reservation Details</h2>
      <div className="reservations-placeholder">
        {details ? (
          <div>
            <p><strong>Location:</strong> {details.location}</p>
            <p><strong>Time:</strong> {details.time}</p>
            <p><strong>Spots Reserved:</strong> {details.spots}</p>
            <p><strong>Price:</strong> ${details.price}</p>
            <p><strong>Confirmation Number:</strong> {details.confirmationNumber}</p>
          </div>
        ) : (
          <strong>No Reservations</strong>
        )}
      </div>
    </section>
  );
}

export default ReservationDetails;
