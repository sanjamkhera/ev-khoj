import React from 'react';

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h2>Featured stories</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="path-to-your-image.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Story Title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
