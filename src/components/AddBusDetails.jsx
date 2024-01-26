import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Swal from 'sweetalert2';

const AddBusDetails = () => {
    const [inputField, setInputField] = useState({
        "busowner": sessionStorage.getItem("id"),
        "busname":"",
        "thumbnail": "",
        "busnumber": "",
        "seats": "",
    })

    const [busNumbers, setBusNumbers] = useState([]);

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value });
    };

    const readValue = () => {
        axios.post("http://127.0.0.1:8000/bus/add_bus_details/", inputField)
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: 'Successfully added',
          });
        })
    };

    useEffect(() => {
        console.log("Bus Owner ID:", inputField.busowner);
        // Fetch bus numbers based on busowner ID when busowner ID changes
        if (inputField.busowner) {
            axios.get(`http://127.0.0.1:8000/bus/get_bus_numbers/${inputField.busowner}/`)
                .then(response => {
                    console.log("API Response:", response.data);
                    setBusNumbers(response.data.busnumbers);
                })
                .catch(error => {
                    console.error('Error fetching bus numbers:', error);
                });
        }
    }, [inputField.busowner]);

  return (

<>
<Navbar></Navbar>
<main id="main" class="main">

<div class="pagetitle">
    <h1>Add Bus Details</h1>
</div>
<section class="section dashboard">
    <div class="row">
        <div className="col-md-6 col-lg-6 col-sm-6">
            {/* <label className="form-label">Bus Owner</label> */}
            <input type="hidden" className="form-control" name="busowner" value={inputField.busowner} onChange={inputHandler} readOnly />

            <label className="form-label">Bus Name</label>
            <input type="text" className="form-control" name="busname" value={inputField.busname} onChange={inputHandler} />

            <label className="form-label mt-2">Thumbnail</label>
            <input type="text" className="form-control" name="thumbnail" value={inputField.thumbnail} onChange={inputHandler} />

            <label className="form-label mt-2">Bus Number</label>
            <select className="form-control" name="busnumber" value={inputField.busnumber} onChange={inputHandler}>
                <option value="" disabled>Select Bus Number</option>
                {busNumbers.map(bus => (
                <option key={bus} value={bus}>{bus}</option>
                ))}
            </select>

            <label className="form-label mt-2">Number of Seats</label>
            <input type="text" className="form-control" name="seats" value={inputField.seats} onChange={inputHandler} />

            <button className='btn btn-success mt-2' onClick={readValue}>Submit</button>
        </div>
    </div>
</section>

</main>
    </>
  )
}

export default AddBusDetails