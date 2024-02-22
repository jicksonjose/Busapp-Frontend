import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Otp = () => {
    const navigate = useNavigate();
  
    const [inputField, setInputField] = useState({
      otp: '',
      name: '',
      phone: '',
      email: '',
      password: ''
    });
  
    const [validationErrors, setValidationErrors] = useState({
      otp: '',
      name: '',
      email: '',
      phone: '',
      username: '',
      password: ''
    });
  
    useEffect(() => {
        const storedUserDetails = {
            name: sessionStorage.getItem('userName'),
            email: sessionStorage.getItem('userEmail'),
            phone: sessionStorage.getItem('userPhone'),
            password: sessionStorage.getItem('password'),
          };
          setInputField((prevInputField) => ({
            ...prevInputField,
            ...storedUserDetails,
          }));
        }, []);
  
    const inputHandler = (event) => {
      setInputField({ ...inputField, [event.target.name]: event.target.value });
      setValidationErrors({ ...validationErrors, [event.target.name]: '' });
    };
  
    const readValue = () => {
      let isValid = true;
      const newValidationErrors = {
        otp: '',
        name: '',
        email: '',
        phone: '',
        username: '',
        password: ''
      };
  
      if (inputField.otp.trim() === '') {
        newValidationErrors.otp = 'Please enter your OTP.';
        isValid = false;
      }
  
      setValidationErrors(newValidationErrors);
  
      if (isValid) {
        // Assuming you have the correct API endpoint for OTP verification
        axios.post("http://127.0.0.1:8000/users/verify-otp/", { 
          otp: inputField.otp,
          name: inputField.name,
          email: inputField.email,
          phone: inputField.phone,
          password: inputField.password
        })
          .then((otpResponse) => {
            if (otpResponse.data.status === 'verified') {
              Swal.fire({
                icon: 'success',
                title: 'Verified OTP Successfully',
                text:'You can now log in with your credentials'
              });
              navigate("/");
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Invalid OTP',
                text: 'Please enter a valid OTP.',
              });
            }
          })
          .catch((error) => {
            console.error('Axios error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'There was an unexpected error during OTP verification. Please try again later.',
            });
          });
      }
    };
  
    return (
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-4" style={{ width: '450px' }}>
                  <div className="card-body">
                    <div className="pt-4 pb-4">
                      <h5 className="card-title text-center pb-0 fs-4">Enter your OTP</h5>
                    </div>
  
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">OTP</label>
                      <input
                        type="text"
                        name="otp"
                        className={`form-control ${validationErrors.otp && 'is-invalid'}`}
                        id="yourUsername"
                        required
                        maxLength={6}
                        value={inputField.otp}
                        onChange={inputHandler}
                      />
                      <div className="invalid-feedback">{validationErrors.otp}</div>
                    </div>
  
                    {/* Additional input fields for other session data */}
                    <div className="col-12">
                      {/* <label htmlFor="yourName" className="form-label">Name</label> */}
                      <input
                        type="hidden"
                        name="name"
                        className={`form-control ${validationErrors.name && 'is-invalid'}`}
                        id="yourName"
                        required
                        value={inputField.name}
                        onChange={inputHandler}
                      />
                      <div className="invalid-feedback">{validationErrors.name}</div>
                    </div>
  
                    <div className="col-12">
                      {/* <label htmlFor="yourEmail" className="form-label">Email</label> */}
                      <input
                        type="hidden"
                        name="email"
                        className={`form-control ${validationErrors.email && 'is-invalid'}`}
                        id="yourEmail"
                        required
                        value={inputField.email}
                        onChange={inputHandler}
                      />
                      <div className="invalid-feedback">{validationErrors.email}</div>
                    </div>
  
                    <div className="col-12">
                      {/* <label htmlFor="yourPhone" className="form-label">Phone</label> */}
                      <input
                        type="hidden"
                        name="phone"
                        maxLength={10}
                        className={`form-control ${validationErrors.phone && 'is-invalid'}`}
                        id="yourPhone"
                        required
                        value={inputField.phone}
                        onChange={inputHandler}
                      />
                      <div className="invalid-feedback">{validationErrors.phone}</div>
                    </div>
  
                    <div className="col-12">
                      {/* <label htmlFor="yourPassword" className="form-label">Password</label> */}
                      <input
                        type="hidden"
                        name="password"
                        className={`form-control ${validationErrors.password && 'is-invalid'}`}
                        id="yourPassword"
                        required
                        value={inputField.password}
                        onChange={inputHandler}
                      />
                      <div className="invalid-feedback">{validationErrors.password}</div>
                    </div>
  
                    <div className="col-12 mt-3">
                      <button className="btn btn-success w-100" onClick={readValue}>Verify OTP</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Otp;