import React from 'react';
import './Point_Table.css';

const PointsTable = () => {
  // Dummy data for points table
  const tableData = [
    { club: 'Club A', location: 'Location A', owner: 'Owner A', points: 15, wins: 5, defeats: 2, draws: 3, matches: 10, goalsScored: 15, goalsReceived: 10 },
    { club: 'Club B', location: 'Location B', owner: 'Owner B', points: 12, wins: 4, defeats: 3, draws: 0, matches: 7, goalsScored: 10, goalsReceived: 8 },
    { club: 'Club C', location: 'Location C', owner: 'Owner C', points: 10, wins: 3, defeats: 4, draws: 1, matches: 8, goalsScored: 12, goalsReceived: 15 },
    { club: 'Club D', location: 'Location D', owner: 'Owner D', points: 8, wins: 2, defeats: 5, draws: 2, matches: 9, goalsScored: 9, goalsReceived: 12 },
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

