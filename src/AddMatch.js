import React, { useState } from 'react';
import './AddMatch.css';

const AddMatch = () => {
  const [teamOne, setTeamOne] = useState('');
  const [teamTwo, setTeamTwo] = useState('');
  const [goalsOne, setGoalsOne] = useState(0);
  const [goalsTwo, setGoalsTwo] = useState(0);

  const teams = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']; // List of teams

  const handlePlayMatch = () => {
    const randomTeamOne = teams[Math.floor(Math.random() * teams.length)];
    const randomTeamTwo = teams[Math.floor(Math.random() * teams.length)];

    // Generate random goals for each team
    const randomGoalsOne = Math.floor(Math.random() * 6); // Random number between 0 and 5
    const randomGoalsTwo = Math.floor(Math.random() * 6);

    setTeamOne(randomTeamOne);
    setTeamTwo(randomTeamTwo);
    setGoalsOne(randomGoalsOne);
    setGoalsTwo(randomGoalsTwo);

    console.log('Playing match:', randomTeamOne, randomGoalsOne, '-', randomTeamTwo, randomGoalsTwo);
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
