import React, { useEffect, useState } from "react";

export default function ConfirmedBooking() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("bookingData")) || [];
    setBookingData(data);
  }, []);

  return (
    <section style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1>Booking Has Been Confirmed! 🎉</h1>
      <p>
        Thank you for choosing Little Lemon. Here are your reservation details:
      </p>


      {bookingData.length > 0 && (
        <table
          style={{
            margin: "30px auto",
            borderCollapse: "collapse",
            width: "80%",
            maxWidth: "600px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f4ce14", color: "#495e57" }}>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Date
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Time
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Guests
              </th>
              <th style={{ border: "1px solid #ccc", padding: "10px" }}>
                Occasion
              </th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {booking.date}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {booking.time}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {booking.guests}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                  {booking.occasion}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
