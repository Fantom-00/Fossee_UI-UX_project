import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WorkshopCard from "./components/WorkshopCard";
import BookingForm from "./components/BookingForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Available Workshops</h1>

        <WorkshopCard 
          title="React Basics" 
          date="10 April 2026"
          onRegister={() => setShowForm(true)}
        />

        <WorkshopCard 
          title="AI Introduction" 
          date="15 April 2026"
          onRegister={() => setShowForm(true)}
        />

        <WorkshopCard 
          title="Web Development Bootcamp" 
          date="20 April 2026"
          onRegister={() => setShowForm(true)}
        />

        {/* 👇 Show form only when clicked */}
        {showForm && <BookingForm />}
      </div>
    </>
  );
}

export default App;