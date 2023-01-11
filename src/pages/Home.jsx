import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div>
    Home
    <div className="card text-center ms-4" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  )
}

export default Home
