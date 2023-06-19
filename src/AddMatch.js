import React from 'react';
import './AddMatch.css';

const AddMatch = () => {
  const teamOne = 'Team A';
  const teamTwo = 'Team B';
  const goalsOne = 2;
  const goalsTwo = 1;

  const handlePlayMatch = () => {
    // Perform action when "Play Match" button is clicked
    console.log('Playing match:', teamOne, goalsOne, '-', teamTwo, goalsTwo);
  };

  return (
    <div className="add-match-container">
      <h2>Add Match</h2>
      <div className="team-inputs">
        <div className="team">{teamOne}</div>
        <div className="team">{teamTwo}</div>
      </div>
      <div className="goals-inputs">
        <div className="goals">{goalsOne}</div>
        <div className="goals">{goalsTwo}</div>
      </div>
      <button className="play-match-button" onClick={handlePlayMatch}>
        Play Match
      </button>
    </div>
  );
};

export default AddMatch;
