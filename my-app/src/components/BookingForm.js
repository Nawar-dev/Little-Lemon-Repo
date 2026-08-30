import React, { useState } from "react";

export default function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(props.availableTimes?.[0] || "17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    props.submitForm(formData);
  };

  const isValid = date !== "" && time !== "" && guests >= 1 && guests <= 10 && occasion !== "";

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "400px",
    margin: "10px auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  };

  const titleStyle = {
    textAlign: "center",
    borderBottom: "2px solid #333",
    paddingBottom: "15px",
    marginBottom: "5px",
    fontSize: "28px"
  };

  const labelStyle = {
    fontWeight: "bold",
    display: "block",
    marginBottom: "8px",
    color: "#333",
    fontSize: "16px"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    backgroundColor: "#fff"
  };

  const buttonStyle = {
    backgroundColor: isValid ? "#F4CE14" : "#e0e0e0", // لون أصفر عند التفعيل، رمادي عند التعطيل
    color: isValid ? "#333" : "#888",
    padding: "15px",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: isValid ? "pointer" : "not-allowed",
    marginTop: "10px",
    width: "100%",
    boxShadow: isValid ? "0 4px 6px rgba(0,0,0,0.1)" : "none"
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>Reserve a Table</h2>

        <div>
          <label htmlFor="res-date" style={labelStyle}>Date :</label>
          <input
            type="date"
            id="res-date"
            value={date}
            required
            onChange={handleDateChange}
            style={inputStyle}
          />
          {date === "" && (
            <p style={{ color: "#d9534f", fontSize: "13px", margin: "5px 0 0" }}>
              Please select a valid date.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-time" style={labelStyle}>Time :</label>
          <select
            id="res-time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
            style={inputStyle}
          >
            {props.availableTimes?.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
          {time === "" && (
            <p style={{ color: "#d9534f", fontSize: "13px", margin: "5px 0 0" }}>
              Please select an available time.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guests" style={labelStyle}>Number of People :</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            required
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={inputStyle}
          />
          {(guests < 1 || guests > 10) && (
            <p style={{ color: "#d9534f", fontSize: "13px", margin: "5px 0 0" }}>
              Guests must be between 1 and 10.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="occasion" style={labelStyle}>Occasion :</label>
          <select
            id="occasion"
            value={occasion}
            required
            onChange={(e) => setOccasion(e.target.value)}
            title="Let us know if it's a special occasion so we can prepare a surprise!"
            style={inputStyle}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <small style={{ color: "#666", display: "block", marginTop: "5px" }}>
            * Selecting an occasion helps us make your visit special!
          </small>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          aria-label="Submit reservation"
          style={buttonStyle}
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}