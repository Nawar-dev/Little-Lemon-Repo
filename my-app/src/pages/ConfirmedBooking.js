import React, { useEffect, useState } from "react";

export default function ConfirmedBooking() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookingData")) || [];
    setBookingData(data);
  }, []);

  return (
    <section style={{ textAlign: "center", padding: "40px 20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#2E7D32" />
          <path
            d="M28 50L43 65L72 32"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 style={{ color: "#333" }}>Booking Has Been Confirmed! 🎉</h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Thank you for choosing Little Lemon. Here are your reservation details:
      </p>

      {bookingData.length > 0 && (

        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              maxWidth: "600px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f4ce14", color: "#333" }}>
                <th style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>Date</th>
                <th style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>Time</th>
                <th style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>Guests</th>
                <th style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>Occasion</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking, index) => (
                <tr key={index} style={{ backgroundColor: "#fff" }}>
                  <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>{booking.date}</td>
                  <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>{booking.time}</td>
                  <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>{booking.guests}</td>
                  <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>{booking.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}