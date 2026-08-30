import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";
import { fetchAPI, submitAPI } from "../api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES" && action.date) {
    const selectedDate = new Date(action.date);
    return fetchAPI(selectedDate);
  }
  return state;
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  const navigate = useNavigate();

const submitForm = (formData) => {
  if (submitAPI(formData)) {

    const existingBookings = JSON.parse(localStorage.getItem("bookingData")) || [];
    const updatedBookings = [...existingBookings, formData];
    localStorage.setItem("bookingData", JSON.stringify(updatedBookings));

    navigate('/confirmed');
  }
};

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
