import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';

const Schedule = () => {
  const [formData, setFormData] = useState({
    busname: '',
    route: '',
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [busDetailsAndRoutes, setBusDetailsAndRoutes] = useState(null);

  useEffect(() => {
    // Fetch bus details and routes when component mounts
    fetchBusDetailsAndRoutes();
  }, []);

  const fetchBusDetailsAndRoutes = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/bus/get_bus_details_and_routes/${sessionStorage.getItem("id")}/`);
      setBusDetailsAndRoutes(response.data);
    } catch (error) {
      console.error('Error fetching bus details and routes:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Make a POST request to save the schedule
        await axios.post('http://127.0.0.1:8000/bus/save_schedule/', formData);
        // Show success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Schedule saved successfully',
        });
        // Clear form data upon success
        setFormData({
          busname: '',
          route: '',
          date: '',
        });
      } catch (error) {
        console.error('Error saving schedule:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.busname.trim()) {
      errors.busname = "Please select a bus.";
    }
    if (!data.route.trim()) {
      errors.route = "Please select a route.";
    }
    if (!data.date) {
      errors.date = "Please select a date.";
    }
    return errors;
  };

  return (
    <>
      <Navbar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Bus Schedule</h1>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6">
              <form onSubmit={handleSubmit}>
                {/* Form fields for bus name, route, and date */}
                {busDetailsAndRoutes && (
                  <>
                    <div className="form-group">
                      <label htmlFor="" className="form-label mt-3">
                        Bus Name
                      </label>
                      <br />
                      <select
                        className="form-control"
                        name="busname"
                        value={formData.busname}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select bus</option>
                        {busDetailsAndRoutes.bus_details.map(bus => (
                          <option key={bus.id} value={bus.id}>{bus.id}</option>
                        ))}
                      </select>
                      {errors.busname && (
                        <p className="error-message" style={{ color: 'red' }}>
                          {errors.busname}
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="" className="form-label mt-3">
                        Bus Route
                      </label>
                      <br />
                      <select
                        className="form-control"
                        name="route"
                        value={formData.route}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select Route</option>
                        {busDetailsAndRoutes.bus_routes.map(route => (
                          <option key={route.id} value={route.id}>{route.start} - {route.destination}</option>
                        ))}
                      </select>
                      {errors.route && (
                        <p className="error-message" style={{ color: 'red' }}>
                          {errors.route}
                        </p>
                      )}
                    </div>
                  </>
                )}

                <div className="form-group">
                  <label htmlFor="" className="form-label mt-3">
                    Date
                  </label>
                  <br />
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <p className="error-message" style={{ color: 'red' }}>
                      {errors.date}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn btn-success mt-3">
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

export default Schedule;
