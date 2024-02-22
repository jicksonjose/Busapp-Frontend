import React, { useState } from 'react';
import Navbar from './Navbar';

const AddBusRoutes = () => {
  const [formData, setFormData] = useState({
    busname: '',
    start: '',
    destination: '',
    starting_time: '',
    destination_time: '',
  });



  const [errors, setErrors] = useState({});
  const [busName, setBusDetails] = useState(null);
  useEffect(() => {
    // Fetch bus details and routes when component mounts
    fetchBusDetails();
  }, []);

  const fetchBusDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/bus/get_bus_details_and_routes/${sessionStorage.getItem("id")}/`);
      setBusDetails(response.data);
    } catch (error) {
      console.error('Error fetching bus details and routes:', error);
    }
  };

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
    if (!formData.busname.trim()) {
      newErrors.busname = 'Bus Name is required';
    }
    if (!formData.start.trim()) {
      newErrors.start = 'Start is required';
    }
    if (!formData.destination.trim()) {
      newErrors.destination = 'Destination is required';
    }
    if (!formData.starting_time.trim()) {
      newErrors.starting_time = 'Starting time is required';
    }

    if (!formData.destination_time.trim()) {
      newErrors.destination_time = 'Destination time is required';
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
      <Navbar></Navbar>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Bus Route</h1>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6">
              <form onSubmit={handleSubmit}>
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
                    <option value="">Select bus </option>
                    
                  </select>
                  {errors.busname && (
                    <p className="error-message" style={{ color: 'red' }}>
                      {errors.busname}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="" className="form-label mt-3">
                    Start 
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="start"
                    value={formData.start}
                    onChange={handleChange}
                  />
                  {errors.start && (
                    <p className="error-message" style={{ color: 'red' }}>
                      {errors.start}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="" className="form-label mt-3">
                    Destination
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                  />
                  {errors.destination && (
                    <p className="error-message" style={{ color: 'red' }}>
                      {errors.destination}
                    </p>
                  )}
                </div>


                <div className="form-group">
                  <label htmlFor="" className="form-label mt-3">
                    Starting Time
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="starting_time"
                    value={formData.starting_time}
                    onChange={handleChange}
                  />
                  {errors.starting_time && (
                    <p className="error-message" style={{ color: 'red' }}>
                      {errors.starting_time}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="" className="form-label mt-3">
                    Destination Time
                  </label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="destination_time"
                    value={formData.destination_time}
                    onChange={handleChange}
                  />
                  {errors.destination_time && (
                    <p className="error-message" style={{ color: 'red' }}>
                      {errors.destination_time}
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

export default AddBusRoutes;
