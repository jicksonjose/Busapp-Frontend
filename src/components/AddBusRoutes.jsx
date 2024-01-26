import React from 'react'
import Navbar from './Navbar'

const AddBusRoutes = () => {
  return (
    <>
    <Navbar></Navbar>
    <main id="main" class="main">

<div class="pagetitle">
    <h1>Add Bus Route</h1>
</div>
<section class="section dashboard">
    <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-6">
            
            <label for="" class="form-label mt-3">Bus Name and Number</label>
            <br/>
            <select class="form-control">
                <option value="">Select bus </option>
                <option value="">Kallada - KL-07-2344</option>
                <option value="">Oshanam - KL-06-2344</option>
                <option value="">St.Mary -KL-06-2344</option>
            </select>

            <label for="" class="form-label mt-3">Source</label>
            <br/>
            <input type="text" class="form-control" name="bus_owner_id" id=""/>

            <label for="" class="form-label mt-3">Destination</label>
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

export default AddBusRoutes