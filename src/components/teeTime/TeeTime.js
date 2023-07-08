import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import "../../images/TeeTimeBackground.jpeg";
import "./TeeTime.css";

const TeeTimeBooking = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookingConfirm = () => {
    setBookingConfirmed(true);
  };

  const handleBookingClose = () => {
    setBookingConfirmed(false);
    toggleBox();
  };

  return (
    <div id="teetime" className="teetime-background">
      <div className="teetime-flex">
        <h1>Make a reservation</h1>
        <p>(123)-456-7890</p>
        <h2 onClick={toggleBox} className={`teetime ${isOpen ? "open" : ""}`}>
          Tee Time Booking
        </h2>
        {isOpen && (
          <div className="teetime-box">
            <p>Available tee times</p>
            <ul>
              <li onClick={() => handleTimeSelect("08:00 AM")}>08:00 AM</li>
              <li onClick={() => handleTimeSelect("09:00 AM")}>09:00 AM</li>
              <li onClick={() => handleTimeSelect("10:00 AM")}>10:00 AM</li>
              <li onClick={() => handleTimeSelect("11:00 AM")}>11:00 AM</li>
              <li onClick={() => handleTimeSelect("12:00 PM")}>12:00 PM</li>
              <li onClick={() => handleTimeSelect("01:00 PM")}>01:00 PM</li>
              <li onClick={() => handleTimeSelect("02:00 PM")}>02:00 PM</li>
            </ul>

            {selectedTime && (
              <div>
                <p>Selected Tee Time: {selectedTime}</p>
                <button onClick={handleBookingConfirm}>Confirm Booking</button>
              </div>
            )}
          </div>
        )}
      </div>
      {bookingConfirmed && (
        <p className="booking-confirmed-message">
          Booking confirmed for {selectedTime}!
          <FaTimesCircle
            className="FaTimesCircle"
            onClick={handleBookingClose}
          />
        </p>
      )}
    </div>
  );
};

export default TeeTimeBooking;
