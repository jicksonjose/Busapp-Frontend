import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';

const UploadDocuments = () => {
  const navigate = useNavigate();
  const [inputField, SetInputField] = useState({
    busowner: sessionStorage.getItem('id'),
    busRc: '',
    owner_ID: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    busRc: '',
    owner_ID: '',
  });

  const inputHandler = (event) => {
    SetInputField({ ...inputField, [event.target.name]: event.target.value });
    setErrorMessages({ ...errorMessages, [event.target.name]: '' });
  };

  const readValue = () => {
    let hasError = false;
    const newErrorMessages = {};

    // Check if any field is empty
    for (const key in inputField) {
      if (!inputField[key]) {
        newErrorMessages[key] = 'This field is required';
        hasError = true;
      }
    }

    if (hasError) {
      setErrorMessages(newErrorMessages);
      return;
    }

    axios.post('http://127.0.0.1:8000/bus/add_bus_document/', inputField).then(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully added',
          text: 'Please wait for the verification',
        });
        navigate("/busdocuments");
      }
    );
  };

  return (
    <>
      <Navbar></Navbar>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Upload Documents</h1>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6">
              <input
                type="hidden"
                className="form-control"
                name="busowner"
                value={inputField.busowner}
                onChange={inputHandler}
              />
              <label className="form-label">Upload the vehicle RC</label>
              <input
                type="text"
                className="form-control"
                name="busRc"
                value={inputField.busRc}
                onChange={inputHandler}
              />
              {errorMessages.busRc && (
                <span className="text-danger">{errorMessages.busRc}</span>
              )}
              <div>
              <label className="form-label mt-5">Upload the Owner ID</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="owner_ID"
                value={inputField.owner_ID}
                onChange={inputHandler}
              />
              {errorMessages.owner_ID && (
                <span className="text-danger">{errorMessages.owner_ID}</span>
              )}
              </div>
              <div>
              <button className="btn btn-success mt-2" onClick={readValue}>
                Submit
              </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UploadDocuments;
