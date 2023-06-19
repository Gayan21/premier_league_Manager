import React, { useState } from 'react';
import './AddMatch.css';

const AddMatch = () => {
  const [teamOne, setTeamOne] = useState('');
  const [teamTwo, setTeamTwo] = useState('');
  const [goalsOne, setGoalsOne] = useState(0);
  const [goalsTwo, setGoalsTwo] = useState(0);

  const handleTeamOneChange = (event) => {
    setTeamOne(event.target.value);
  };

  const handleTeamTwoChange = (event) => {
    setTeamTwo(event.target.value);
  };

  const handleGoalsOneChange = (event) => {
    setGoalsOne(parseInt(event.target.value));
  };

  const handleGoalsTwoChange = (event) => {
    setGoalsTwo(parseInt(event.target.value));
  };

  const handlePlayMatch = () => {
    // Perform action when "Play Match" button is clicked
    console.log('Playing match:', teamOne, goalsOne, '-', teamTwo, goalsTwo);
    // Reset input fields
    setTeamOne('');
    setTeamTwo('');
    setGoalsOne(0);
    setGoalsTwo(0);
  };

  return (
    <div className="add-match-container">
      <h2>Add Match</h2>
      <div className="team-inputs">
        <input type="text" value={teamOne} onChange={handleTeamOneChange} placeholder="Team One" />
        <input type="text" value={teamTwo} onChange={handleTeamTwoChange} placeholder="Team Two" />
      </div>
      <div className="goals-inputs">
        <input type="number" value={goalsOne} onChange={handleGoalsOneChange} placeholder="Goals by Team One" />
        <input type="number" value={goalsTwo} onChange={handleGoalsTwoChange} placeholder="Goals by Team Two" />
      </div>
      <button className="play-match-button" onClick={handlePlayMatch}>
        Play Match
      </button>
    </div>
  );
};

export default AddMatch;
