import React from "react";
import BookingForm from "../components/BookingForm";

export default function BookingPage(props) {
  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff"
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "600px"
  };

  const h1Style = {
    fontSize: "36px",
    color: "#333",
    margin: "0 0 10px 0"
  };

  const pStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
    margin: "0"
  };

  return (
    <main className="booking-page" style={pageStyle}>
      <section className="booking-header" style={headerStyle}>
        <h1 style={h1Style}>Table Reservation</h1>
        <p style={pStyle}>
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