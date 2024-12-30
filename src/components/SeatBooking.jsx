import React, { useState } from "react";
import "./SeatBooking.css";

const SeatBooking = () => {
  const totalSeats = 80; // Total seats
  const seatsPerRow = 7; // Seats per row
  const rows = Math.ceil(totalSeats / seatsPerRow); // Number of rows
  const [seats, setSeats] = useState(Array(totalSeats).fill(false)); // Seat states
  const [bookedCount, setBookedCount] = useState(0);

  const handleBooking = (numSeats) => {
    const updatedSeats = [...seats];
    let count = 0;

    for (let i = 0; i < updatedSeats.length && count < numSeats; i++) {
      if (!updatedSeats[i]) {
        updatedSeats[i] = true; // Mark seat as booked
        count++;
      }
    }

    if (count < numSeats) {
      alert("Not enough seats available!");
      return;
    }

    setSeats(updatedSeats);
    setBookedCount(bookedCount + numSeats);
  };

  const handleReset = () => {
    setSeats(Array(totalSeats).fill(false));
    setBookedCount(0);
  };

  return (
    <div className="seat-booking">
      <h2>Seat Booking</h2>
      <div className="seats-container">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {Array.from({ length: seatsPerRow }).map((_, colIndex) => {
              const seatIndex = rowIndex * seatsPerRow + colIndex;
              if (seatIndex >= totalSeats) return null;
              return (
                <div
                  key={seatIndex}
                  className={`seat ${seats[seatIndex] ? "booked" : "available"}`}
                >
                  {seatIndex + 1}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="controls">
        <input
          type="number"
          placeholder="Enter number of seats"
          min="1"
          max="7"
          id="seat-count"
        />
        <button
          onClick={() =>
            handleBooking(Number(document.getElementById("seat-count").value))
          }
        >
          Book
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="summary">
        <p>Booked Seats: {bookedCount}</p>
        <p>Available Seats: {totalSeats - bookedCount}</p>
      </div>
    </div>
  );
};

export default SeatBooking;
