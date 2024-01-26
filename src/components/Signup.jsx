import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const errors = {};

    // Name validation: Only alphabets
    if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      errors.name = 'Please enter a valid name (only alphabets)';
    }

    // Email validation: Must satisfy the pattern for Gmail
    if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid Gmail address';
    }

    // Phone number validation: Must be a 10-digit number
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Username validation: Non-empty
    if (!formData.username.trim()) {
      errors.username = 'Please choose a username';
    }

    // Password validation: Non-empty
    if (!formData.password.trim()) {
      errors.password = 'Please enter your password';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Perform form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (

    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                        <p className="text-center small">Enter your personal details to create an account</p>
                      </div>

                      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="col-12">
                          <label htmlFor="yourName" className="form-label">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                            id="yourName"
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">{formErrors.name}</div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                            id="yourEmail"
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">{formErrors.email}</div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPhone" className="form-label">
                            Your Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            maxlength="10"
                            className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
                            id="yourPhone"
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">{formErrors.phone}</div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Username
                          </label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">
                              @
                            </span>
                            <input
                              type="text"
                              name="username"
                              className={`form-control ${formErrors.username ? 'is-invalid' : ''}`}
                              id="yourUsername"
                              onChange={handleChange}
                              required
                            />
                            <div className="invalid-feedback">{formErrors.username}</div>
                          </div>
                        </div>

                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
                            id="yourPassword"
                            onChange={handleChange}
                            required
                          />
                          <div className="invalid-feedback">{formErrors.password}</div>
                        </div>

                        <div className="col-12"></div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">
                            Create Account
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Already have an account? <Link to="/">Log in</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>

  );
};

export default Signup;