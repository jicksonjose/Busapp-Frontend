import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
const Login = () => {

      //condition based routing
       //condition based routing
       const navigate = useNavigate()
       const [inputField, SetInputField] = useState(
           {
               "email": "",
               "password": ""
           })
   
       const inputHandler = (event) => {
           SetInputField({ ...inputField, [event.target.name]: event.target.value })
       }
   
       const readValue = () => {
           console.log(inputField)
           axios.post("http://127.0.0.1:8000/users/login/", inputField).then((response) => {
               //alert(response.data)
               console.log(response.data)
               if (response.data.length > 0){
                   const getId = response.data[0].id
                   const getName = response.data[0].name
                   
                   Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    text: `Welcome, ${getName}!`,
                }).then(() => {
                    sessionStorage.setItem("id", getId);
                    sessionStorage.setItem("name", getName);
                    navigate("/dashboard"); // Use the correct navigation function
                });
                   
               }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid credentials',
                    text: 'Please check your username or password.',
                });
               }
           }) 
           
       }
    return (

        <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div class="card mb-4" style={{ width: '350px' }}>
                                <div class="card-body">
                                    <div class="pt-4 pb-4">
                                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p class="text-center small">Enter your username & password to login</p>
                                    </div>
                                   
                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Username</label>
                                                <input type="text" name="email" class="form-control" id="" required  value={inputField.email} onChange={inputHandler}/>
                                                <div class="invalid-feedback">Please enter your username.</div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Password</label>
                                            <input type="password" name="password" class="form-control" id="yourPassword" required  value={inputField.password} onChange={inputHandler}/>
                                            <div class="invalid-feedback">Please enter your password!</div>
                                        </div>

                                        <div class="col-12">

                                        </div>
                                        <div class="col-12 mt-3">
                                            <button class="btn btn-primary w-100" onClick={readValue}>Login</button>
                                            {/* <Link to='/dashboard'>Dashboard</Link> */}
                                        </div>
                                        <div class="col-12 mt-3">
                                            <p class="small mb-0">Don't have account? 
                                            <Link to="/signup">Create and account</Link></p>
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

export default Login