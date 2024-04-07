import React, { useState } from "react";
import studySpotsData from "./studySpotData.json";
import "./RandomGenerator.css"; 

function RandomGenerator() {
  const [randomSpot, setRandomSpot] = useState();

  const generateRandomSpot = () => {
    const randomIndex = Math.floor(Math.random() * studySpotsData.length);
    setRandomSpot(studySpotsData[randomIndex]);
  };

  return (
    <div className="Home">
       <h2 className="Title">{"StudyAlli"}</h2>
      <button onClick={generateRandomSpot}>Find Me A Study Spot</button>

      {randomSpot && (
        <div className="box">
         
          <div className="LeftSide">
            <img src={`/images/${randomSpot.image}`} alt={randomSpot.buildingName} />
          </div>

          <div className="rightSide">
            <h2 className="rightSideTitle">{randomSpot.buildingName}</h2>
            <p><strong>Address:</strong> {randomSpot.address}</p>
            <p><strong>Operating Hours:</strong> {randomSpot.operatinghours}</p>
            <p><strong>Food Availability:</strong> {Array.isArray(randomSpot.foodAvailability) ? randomSpot.foodAvailability.join(", ") : randomSpot.foodAvailability}</p>
            <p><strong>Bus Routes:</strong> {randomSpot.busRoutes.join(", ")}</p>
          </div>


        </div>
      )}
    </div>
  );
}

export default RandomGenerator;