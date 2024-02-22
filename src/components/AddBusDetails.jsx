import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddBusDetails = () => {

  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    busowner: sessionStorage.getItem('id'),
    busname: '',
    busrc: '',
    registration_number:'',
    thumbnail: '',
    ac_nonac: false,
    wifi:false,
    food:false,
    drink: false,
  });

  const [validationErrors, setValidationErrors] = useState({
    busname: '',
    busrc: '',
    registration_number:'',
    thumbnail: '',
  });

  const inputHandler = (e) => {
    const { name, value, type, checked , files } = e.target;
    const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value; // Handle file input
  
    console.log(`Checkbox ${name} checked: ${checked}`);
  
    setInputField(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  
    // Clear the validation error for the current field
    setValidationErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

    const readValue = () => {
      const newValidationErrors = {
        busname: '',
        busrc: '',
        registration_number:'',
        thumbnail: '',
      };

      
      

      // Check if any non-checkbox field is empty
      let isValid = true;
      for (const [key, value] of Object.entries(inputField)) {
        if (key !== 'ac_nonac' && key !== 'wifi' && key !== 'food' && key !== 'drink') {
          if (value === '' || (typeof value === 'boolean' && value === false)) {
            newValidationErrors[key] = `Please enter your ${key.replace('_', ' ')}.`;
            isValid = false;
          }
        }
      }
      
      // If any non-checkbox field is empty, set validation errors and return
      if (!isValid) {
        setValidationErrors(newValidationErrors);
        return;
      }

      const formData = new FormData();
      for (const key in inputField) {
        formData.append(key, inputField[key]);
      }
  
      axios.post("http://127.0.0.1:8000/bus/add_bus_details/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Successfully added',
          text : 'Wait for Verification'
        });
        navigate("/busdetails");
      })
      .catch((error) => {
        console.error('Error adding bus details:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to add bus details!',
        });
      });
    };


  return (
    <>
      <Navbar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Bus Details</h1>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6">
              <div className="form-group">
                <input
                    type="text"
                    name="busowner"
                    value={sessionStorage.getItem('id')} 
                    disabled
                />
                <label className="form-label">Bus Name</label>
                <input
                  type="text"
                  className={`form-control ${validationErrors.busname && 'is-invalid'}`}
                  name="busname"
                  value={inputField.busname}
                  onChange={inputHandler}
                />
                {validationErrors.busname && (
                  <span className="text-danger">{validationErrors.busname}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Bus Rc</label>
                <input
                  type="file"
                  className={`form-control ${validationErrors.busrc && 'is-invalid'}`}
                  name="busrc"
                 
                  onChange={inputHandler}
                />
                {validationErrors.busrc && (
                  <span className="text-danger">{validationErrors.busrc}</span>
                )}
              </div>

              <div className="form-group mt-2">
                <label className="form-label">Thumbnail</label>
                <input
                  type="file"
                  className={`form-control ${validationErrors.thumbnail && 'is-invalid'}`}
                  name="thumbnail"
                
                  onChange={inputHandler}
                />
                {validationErrors.thumbnail && (
                  <span className="text-danger">{validationErrors.thumbnail}</span>
                )}
              </div>

              <div className="form-group mt-2">
                <label className="form-label">Bus Registration Number</label>
                <input
                  type="text"
                  className={`form-control ${validationErrors.registration_number && 'is-invalid'}`}
                  name="registration_number"
                  value={inputField.registration_number}
                  onChange={inputHandler}
                />
                {validationErrors.registration_number && (
                  <span className="text-danger">{validationErrors.registration_number}</span>
                )}
              </div>

              <div className="form-group mt-2">
                <label className="form-label">AC / NON AC</label>
                <input style={{marginLeft: "10px"}}
                  type="checkbox"
                  className=""
                  name="ac_nonac"
                  checked={inputField.ac_nonac}
                  onChange={inputHandler}
                />
               
              </div>

              <div className="form-group mt-2">
                <label className="form-label">WiFi</label>
                <input style={{marginLeft: "10px"}}
                  type="checkbox"
                  className=""
                  name="wifi"
                  checked={inputField.wifi}
                  onChange={inputHandler}
                />
               
              </div>

              <div className="form-group mt-2">
                <label className="form-label">Food</label>
                <input style={{marginLeft: "10px"}}
                  type="checkbox"
                  className=""
                  name="food"
                  checked={inputField.food}
                  onChange={inputHandler}
                />
               
              </div>

              <div className="form-group mt-2">
                <label className="form-label">Drinks</label>
                <input style={{marginLeft: "10px"}}
                  type="checkbox"
                  className=""
                  name="drink"
                  checked={inputField.drink}
                  onChange={inputHandler}
                />
                
              </div>

              <div className="form-group mt-2">
                <button className="btn btn-success" onClick={readValue}>
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

export default AddBusDetails;
