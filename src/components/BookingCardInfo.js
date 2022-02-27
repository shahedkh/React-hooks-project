import React, { useState } from "react";
import BookingCard from "./BookingCard";
import "../style/Booking.css";

function BookingCardInfo() {
  const [booking, setBooking] = useState([
    {
      id: 1,
      tutorImg: "tutor1.webp",
      tutorName: "Jane",
      tutorExp: 7,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 50,
    },
    {
      id: 2,
      tutorImg: "tutor2.webp",
      tutorName: "Ghassan",
      tutorExp: 8,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 60,
    },
    {
      id: 3,
      tutorImg: "tutor7.webp",
      tutorName: "Khadeejah",
      tutorExp: 10,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 50,
    },
    {
      id: 4,
      tutorImg: "tutor5.webp",
      tutorName: "Sara",
      tutorExp: 3,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 30,
    },
    {
      id: 5,
      tutorImg: "tutor6.webp",
      tutorName: "Margret",
      tutorExp: 9,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 70,
    },
    {
      id: 6,
      tutorImg: "tutor7.webp",
      tutorName: "Victoria",
      tutorExp: 10,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 50,
    },
    {
      id: 7,
      tutorImg: "tutor2.webp",
      tutorName: "Brad",
      tutorExp: 8,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 60,
    },
    {
      id: 8,
      tutorImg: "tutor1.webp",
      tutorName: "Fatima",
      tutorExp: 7,
      tutorDes:
        "Hello!my hobbies are drawing ,playing video games and I really love teaching :)",
      tutorPrice: 50,
    },
  ]);
  const bookedArrFromStorage=(localStorage.getItem("bookingDetails")?JSON.parse(localStorage.getItem("bookingDetails")):"TEST");

  return (
    <div className="container">
      {booking.map((item) => {
        return <BookingCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default BookingCardInfo;
