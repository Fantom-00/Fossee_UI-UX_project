import React from "react";

function WorkshopCard({ title, date, onRegister }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <button onClick={onRegister}>Register</button>
    </div>
  );
}

export default WorkshopCard;