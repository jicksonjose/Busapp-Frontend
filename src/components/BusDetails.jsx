import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BusDetails = () => {
  const [busList, setBusList] = useState([]);

  useEffect(() => {
    // Fetch bus data from backend API
    axios.get('http://127.0.0.1:8000/bus/bus-details-list/')
      .then(response => {
        // Set the fetched bus data in state
        setBusList(response.data);
      })
      .catch(error => {
        console.error('Error fetching bus data:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Bus Details</h1>
          <Link to="/add-bus-details" className="btn btn-primary mt-5">Add Bus Details</Link>
        </div>
        <section className="section dashboard mt-3">
          <div className="row">
            {busList.map(bus => (
              <div className="col-md-6 col-lg-6 col-sm-6 d-flex" key={bus.id}>
                <div className="card">
                  <img src={`http://127.0.0.1:8000${bus.thumbnail}`}  className="card-img-top" alt="bus" />
                  <div className="card-body">
                    <h5 className="card-title">{bus.busname}</h5>
                    <p className="card-text">{bus.description}</p>
                    <div className="row">
                      <div className="col-md-8 col-lg-8">
                       {bus.wifi && <p>Wi-Fi</p>}
                       {bus.ac_nonac && <p>AC</p>}
                       {bus.drink && <p>Drink Available</p>}
                       {bus.food && <p>Food Available</p>}
                      
                       {bus.is_verified ? (
                        <p>Status: <span className='text-success'>Approved</span></p>
                        ) : (
                        <p>Status: <span className='text-danger'>Wait for Approval</span></p>
                        
                        )}
                                                
                      </div>
                      <div className="col">
                        <a href="#"><i className="bi bi-pencil-square"></i></a>
                      </div>
                      <div className="col">
                        <a href="#"><i className="bi bi-trash3"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default BusDetails;
