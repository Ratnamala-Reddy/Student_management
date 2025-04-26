import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="border rounded shadow text-center p-4"
        style={{ width: "900px", height: "240px", backgroundColor: "#1E90FF", color: "white", marginBottom: "150px" }}
      >
        <h1>Welcome to Student Management</h1>
        <br />
        <h5>Get Students Details and Information</h5>
        <Link to="/Edit" className="btn btn-light my-4">View Students</Link>
      </div>
    </div>
  );
}