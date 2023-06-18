import React from 'react';
import addLogo from './add.png';
import clubsLogo from './clubs.png';
import pointsLogo from './points.png';
import viewLogo from './View.png';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Premier League</h2>
      <div className="card-container">
        <div className="card">
          <img src={addLogo} alt="add" />
          <h3>Points Table</h3>
          <p>In Premier League Manager you can see statistics of every club that
            is in premier league and you can sort the clubs acording to Points ,
            Goals and number of Wins.</p>
        </div>
        <div className="card">
          <img src={clubsLogo} alt="clubs" />
          <h3>Add Match</h3>
          <p> By using Premier League Manager u can add a match between two
            randomly selected teams. the match infomation will also be updated
            randomly.</p>
        </div>
        <div className="card">
          <img src={pointsLogo} alt="points" />
          <h3>View Matches</h3>
          <p> You can view all the matches played in the league and they are
            sorted by the date.</p>
        </div>
        <div className="card">
          <img src={viewLogo} alt="view" />
          <h3>View Clubs</h3>
          <p>You can view all the clubs that currenty in the premier league.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

