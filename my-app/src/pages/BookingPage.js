import React from "react";
import BookingForm from "../components/BookingForm";

export default function BookingPage(props) {
  return (
    <main className="booking-page">
      <section className="booking-header">
        <h1>Table Reservation</h1>
        <p>
          Please fill in the details below to book your table at Little Lemon.
        </p>
      </section>
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </main>
  );
}
