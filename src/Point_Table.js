import React from 'react';
import './Point_Table.css';

const PointsTable = () => {
  // Dummy data for points table
  const tableData = [
    { club: 'Manchester City', location: 'Manchester', owner: 'City Football Group', points: 86, wins: 27, defeats: 6, draws: 5, matches: 38, goalsScored: 83, goalsReceived: 32 },
    { club: 'Manchester United', location: 'Manchester', owner: 'Manchester United plc', points: 74, wins: 21, defeats: 7, draws: 11, matches: 38, goalsScored: 73, goalsReceived: 44 },
    { club: 'Liverpool', location: 'Liverpool', owner: 'Fenway Sports Group', points: 69, wins: 20, defeats: 9, draws: 9, matches: 38, goalsScored: 68, goalsReceived: 42 },
    { club: 'Chelsea', location: 'London', owner: 'Roman Abramovich', points: 67, wins: 19, defeats: 10, draws: 9, matches: 38, goalsScored: 58, goalsReceived: 36 },
    { club: 'Leicester City', location: 'Leicester', owner: 'King Power International Group', points: 66, wins: 20, defeats: 10, draws: 6, matches: 38, goalsScored: 68, goalsReceived: 50 },
    { club: 'West Ham United', location: 'London', owner: 'David Sullivan', points: 65, wins: 19, defeats: 11, draws: 8, matches: 38, goalsScored: 62, goalsReceived: 47 },
    { club: 'Tottenham Hotspur', location: 'London', owner: 'ENIC International Ltd.', points: 62, wins: 18, defeats: 12, draws: 8, matches: 38, goalsScored: 68, goalsReceived: 45 },
    { club: 'Arsenal', location: 'London', owner: 'KSE (Kroenke Sports & Entertainment)', points: 61, wins: 18, defeats: 13, draws: 7, matches: 38, goalsScored: 55, goalsReceived: 39 },
    { club: 'Leeds United', location: 'Leeds', owner: 'Andrea Radrizzani', points: 59, wins: 18, defeats: 15, draws: 5, matches: 38, goalsScored: 62, goalsReceived: 54 },
    { club: 'Everton', location: 'Liverpool', owner: 'Farhad Moshiri', points: 59, wins: 17, defeats: 13, draws: 8, matches: 38, goalsScored: 47, goalsReceived: 46 },
  ];

  return (
    <div className="points-table-container">
      <table className="points-table">
        <thead>
          <tr>
            <th>Club</th>
            <th>Location</th>
            <th>Owner</th>
            <th>Points</th>
            <th>Wins</th>
            <th>Defeats</th>
            <th>Draws</th>
            <th>Matches</th>
            <th>Goals Scored</th>
            <th>Goals Received</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.club}</td>
              <td>{data.location}</td>
              <td>{data.owner}</td>
              <td>{data.points}</td>
              <td>{data.wins}</td>
              <td>{data.defeats}</td>
              <td>{data.draws}</td>
              <td>{data.matches}</td>
              <td>{data.goalsScored}</td>
              <td>{data.goalsReceived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;






