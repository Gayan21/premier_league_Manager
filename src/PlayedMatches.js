import React from 'react';
import './PlayedMatches.css';

const PlayedMatches = () => {
  // Dummy data for played matches
  const matchesData = [
    { date: '2023-06-01', teamOne: 'Manchester United', goalsOne: 2, teamTwo: 'Liverpool', goalsTwo: 1 },
    { date: '2023-06-03', teamOne: 'Chelsea', goalsOne: 0, teamTwo: 'Manchester City', goalsTwo: 2 },
    { date: '2023-06-06', teamOne: 'Arsenal', goalsOne: 1, teamTwo: 'Tottenham Hotspur', goalsTwo: 1 },
    { date: '2023-06-09', teamOne: 'Leicester City', goalsOne: 3, teamTwo: 'Everton', goalsTwo: 2 },
  ];

  return (
    <div>
      <h2>Played Matches</h2>
      <div className="played-matches-container">
        <table className="played-matches-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Team One</th>
              <th>Goals by Team One</th>
              <th>Team Two</th>
              <th>Goals by Team Two</th>
            </tr>
          </thead>
          <tbody>
            {matchesData.map((match, index) => (
              <tr key={index}>
                <td>{match.date}</td>
                <td>{match.teamOne}</td>
                <td>{match.goalsOne}</td>
                <td>{match.teamTwo}</td>
                <td>{match.goalsTwo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayedMatches;





// import React, { useState, useEffect } from 'react';
// import './PlayedMatches.css';

// const PlayedMatches = () => {
//   const [matchesData, setMatchesData] = useState([]);

//   useEffect(() => {
//     // Function to fetch the list of played matches from the Premier League Manager
//     const fetchPlayedMatches = async () => {
//       try {
//         // Make an API call to retrieve the list of played matches
//         const response = await fetch('API_ENDPOINT_TO_FETCH_PLAYED_MATCHES');
//         const data = await response.json();

//         // Sort the matches by date in descending order
//         const sortedMatches = data.sort((a, b) => new Date(b.date) - new Date(a.date));

//         // Update the state with the sorted matches
//         setMatchesData(sortedMatches);
//       } catch (error) {
//         console.error('Error fetching played matches:', error);
//       }
//     };

//     // Call the fetchPlayedMatches function
//     fetchPlayedMatches();
//   }, []);

//   return (
//     <div>
//       <h2>Played Matches</h2>
//       <div className="played-matches-container">
//         <table className="played-matches-table">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Team One</th>
//               <th>Goals by Team One</th>
//               <th>Team Two</th>
//               <th>Goals by Team Two</th>
//             </tr>
//           </thead>
//           <tbody>
//             {matchesData.map((match, index) => (
//               <tr key={index}>
//                 <td>{match.date}</td>
//                 <td>{match.teamOne}</td>
//                 <td>{match.goalsOne}</td>
//                 <td>{match.teamTwo}</td>
//                 <td>{match.goalsTwo}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PlayedMatches;


