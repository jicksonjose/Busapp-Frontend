import React from 'react'
import Navbar from './Navbar'

const AddBusPoint = () => {
  return (
    <>
    <Navbar></Navbar>
    <main id="main" class="main">

<div class="pagetitle">
    <h1>Add Bus Point</h1>
</div>
<section class="section dashboard">
    <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-6">
            <label class="form-label">Bus Name</label>
            <br/>
            <input type="text" class="form-control" name="bus_name" id=""/>

            <label for="" class="form-label mt-3">Bus Route</label>
            <br/>
            <select class="form-control">
                <option value="">Select bus route</option>
                <option value="">Erankula - Kumily</option>
                <option value="">Kumily - Ernakulam</option>
            </select>

            <label for="" class="form-label mt-3">Starting Point</label>
            <br/>
            <input type="text" class="form-control" name="bus_owner_id" id=""/>

            <label for="" class="form-label mt-3">Destination Point</label>
            <br/>
            <input type="text" class="form-control" name="bus_seat_no" id=""/>

            <label for="" class="form-label mt-3">Price</label>
            <br/>
            <input type="text" class="form-control" name="bus_seat_no" id=""/>


            <button type="submit" class="btn btn-success mt-3">Submit</button>
        </div>
    </div>
</section>

</main>
    </>
  )
}

export default AddBusPoint