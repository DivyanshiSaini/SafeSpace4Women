import React, { useState } from "react";
import studySpotsData from "./studySpotData.json";
import "./RandomGenerator.css"; // Import CSS file for styling

function StudySpotGenerator() {
  const [randomSpot, setRandomSpot] = useState(null);

  const generateRandomSpot = () => {
    const randomIndex = Math.floor(Math.random() * studySpotsData.length);
    setRandomSpot(studySpotsData[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Random Study Spot Generator</h1>
      <button onClick={generateRandomSpot}>Generate Random Study Spot</button>
      {randomSpot && (
        <div className="spot-container">
          {/* Left side with image */}
          <div className="image-container">
            <img src={`images/${randomSpot.image}`} alt={randomSpot.buildingName} />
          </div>
          {/* Right side with text */}
          <div className="text-container">
            <h2>{randomSpot.buildingName}</h2>
            <p><strong>Address:</strong> {randomSpot.address}</p>
            <p><strong>Study Booths Available:</strong> {randomSpot.studyBoothsAvailable}</p>
            <p><strong>Food Availability:</strong> {Array.isArray(randomSpot.foodAvailability) ? randomSpot.foodAvailability.join(", ") : randomSpot.foodAvailability}</p>
            <p><strong>Bus Routes:</strong> {randomSpot.busRoutes.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudySpotGenerator;
