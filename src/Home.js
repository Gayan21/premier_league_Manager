import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Premier League</h2>
      <div className="card-container">
        <div className="card">
          <img src="image1.jpg" alt="Image 1" />
          <h3>Card 1</h3>
          <p>Card 1 description</p>
        </div>
        <div className="card">
          <img src="image2.jpg" alt="Image 2" />
          <h3>Card 2</h3>
          <p>Card 2 description</p>
        </div>
        <div className="card">
          <img src="image3.jpg" alt="Image 3" />
          <h3>Card 3</h3>
          <p>Card 3 description</p>
        </div>
        <div className="card">
          <img src="image4.jpg" alt="Image 4" />
          <h3>Card 4</h3>
          <p>Card 4 description</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

