import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const Signup = () => {


       const navigate = useNavigate();  // Use useNavigate hook from react-router-dom

       const [inputField, setInputField] = useState({
        name :'',
        phone:'',
        email: '',
        password: ''
      });
    
      const [validationErrors, setValidationErrors] = useState({
        name :'',
        phone:'',
        email: '',
        password: ''
      });
    
      const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value });
        setValidationErrors({ ...validationErrors, [event.target.name]: '' });
      };
    
      const readValue = () => {
        let isValid = true;
        const newValidationErrors = {
          name: '',
          email: '',
          phone: '',
          username: '',
          password: '',
        };
      
        if (inputField.name.trim() === '') {
          newValidationErrors.name = 'Please enter your name.';
          isValid = false;
        }
      
        if (!/^[A-Za-z\s]+$/.test(inputField.name.trim())) {
          newValidationErrors.name = 'Please enter a valid name (only alphabets)';
          isValid = false;
        }
     
        if (inputField.email.trim() === '') {
          newValidationErrors.email = 'Please enter your email.';
          isValid = false;
        } else if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(inputField.email.trim())) {
          newValidationErrors.email = 'Please enter a valid Gmail address';
          isValid = false;
        }
            
        // Add email format validation here if needed
      
        if (inputField.phone.trim() === '') {
          newValidationErrors.phone = 'Please enter your phone.';
          isValid = false;
        } else if (!/^\d{10}$/.test(inputField.phone.trim())) {
          newValidationErrors.phone = 'Please enter a valid 10-digit phone number';
          isValid = false;
        }
      
        // Add phone format validation here if needed
      
        if (inputField.password.trim() === '') {
          newValidationErrors.password = 'Please enter your password.';
          isValid = false;
        }
      
        setValidationErrors(newValidationErrors);
      
        if (isValid) {
          // Check if email already exists
          axios.get(`http://127.0.0.1:8000/users/get_email/${inputField.email}/`)
            .then((emailResponse) => {
              if (emailResponse.data.exists) {
                Swal.fire({
                  icon: 'error',
                  title: 'Email already exists',
                  text: 'please change your enail.',
                }).then(() => {
                  navigate("/signup");  // Assuming you have a login route
                });
              } else {
                // Check if phone number already exists
                axios.get(`http://127.0.0.1:8000/users/check_phone/${inputField.phone}/`)
                  .then((phoneResponse) => {
                    if (phoneResponse.data.exists) {
                      Swal.fire({
                        icon: 'error',
                        title: 'Phone number already exists',
                        text: 'please change you phone number.',
                      }).then(() => {
                        navigate("/signup");  // Assuming you have a login route
                      });
                    } else {
                      // If neither email nor phone exists, proceed with signup
                      // axios.post("http://127.0.0.1:8000/users/signup/", inputField)
                      axios.post("http://127.0.0.1:8000/users/signup/", inputField)
                        .then((response) => {
                          if (response.data.status === 'added') {
                            sessionStorage.setItem('userName', inputField.name);
                            sessionStorage.setItem('userEmail', inputField.email);
                            sessionStorage.setItem('userPhone', inputField.phone);
                            sessionStorage.setItem('password', inputField.password);

                                  // Print session data to the console
                            console.log('Session Data:', {
                              userName: sessionStorage.getItem('userName'),
                              userEmail: sessionStorage.getItem('userEmail'),
                              userPhone: sessionStorage.getItem('userPhone'),
                              password: sessionStorage.getItem('password'),
                            });
                        
                            Swal.fire({
                              icon: 'success',
                              title: 'Account created successfully',
                              text: 'You can now log in with your credentials.',
                            }).then(() => {
                              navigate("/otp");  // Assuming you have a login route
                            });
                          } 
                        })
                        .catch((error) => {
                          console.error('Axios error:', error);
                          // Handle other errors if needed
                          Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'There was an unexpected error. Please try again later.',
                          });
                        });
                    }
                  })
                  .catch((error) => {
                    console.error('Axios error:', error);
                    // Handle other errors if needed
                    Swal.fire({
                      icon: 'error',
                      title: 'Error',
                      text: 'There was an unexpected error. Please try again later.',
                    });
                  });
              }
            })
            .catch((error) => {
              console.error('Axios error:', error);
              // Handle other errors if needed
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an unexpected error. Please try again later.',
              });
            });
        }
      };
    return (

        <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div class="card mb-4" style={{ width: '450px' }}>
                                <div class="card-body">
                                    <div class="pt-4 pb-4">
                                        <h5 class="card-title text-center pb-0 fs-4">Create Your Account</h5>
                           
                                    </div>
                                      <div class="col-12">
                                            <label for="yourUsername" class="form-label">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className={`form-control ${validationErrors.name && 'is-invalid'}`}
                                                id="yourUsername"
                                                required
                                                value={inputField.name}
                                                onChange={inputHandler}
                                                />
                                                <div className="invalid-feedback">{validationErrors.name}</div>
                                        </div>
                                      <div class="col-12">
                                            <label for="yourUsername" class="form-label">Email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                className={`form-control ${validationErrors.email && 'is-invalid'}`}
                                                id="yourUsername"
                                                required
                                                value={inputField.email}
                                                onChange={inputHandler}
                                                />
                                                <div className="invalid-feedback">{validationErrors.email}</div>
                                        </div>


                                   
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                maxLength={10}
                                                className={`form-control ${validationErrors.phone && 'is-invalid'}`}
                                                id="yourUsername"
                                                required
                                                value={inputField.phone}
                                                onChange={inputHandler}
                                                />
                                                <div className="invalid-feedback">{validationErrors.phone}</div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className={`form-control ${validationErrors.password && 'is-invalid'}`}
                                                id="yourPassword"
                                                required
                                                value={inputField.password}
                                                onChange={inputHandler}
                                                />
                                                <div className="invalid-feedback">{validationErrors.password}</div>
                                        </div>

                                        <div class="col-12">

                                        </div>
                                        <div class="col-12 mt-3">
                                            <button class="btn btn-primary w-100" onClick={readValue}>Create an Account</button>
                                            {/* <Link to='/dashboard'>Dashboard</Link> */}
                                        </div>
                                        <div class="col-12 mt-3">
                                            <p class="small mb-0">Don't have account? 
                                            <Link to="/">Log In</Link></p>
                                        </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Signup