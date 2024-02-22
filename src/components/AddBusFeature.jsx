import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const AddBusFeature = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit the form data
    console.log('Form submitted:', formData);
    // You can add logic to send data to the server here
  };

  return (
    <>
      <Navbar> </Navbar>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Bus Feature</h1>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6">
              <form onSubmit={handleSubmit}>
                <label className="form-label">Title</label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  
                />
                {errors.title && (
                  <p className="error-message" style={{ color: 'red' }}>
                    {errors.title}
                  </p>
                )}

                <label htmlFor="" className="form-label mt-5">
                  Description
                </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  
                />
                {errors.description && (
                  <p className="error-message" style={{ color: 'red' }}>
                    {errors.description}
                  </p>
                )}

                <button type="submit" className="btn btn-success mt-5">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddBusFeature;
