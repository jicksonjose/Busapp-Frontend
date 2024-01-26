import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const BusFeature = () => {
  return (
    <><Navbar></Navbar>
<main id="main" class="main">

<div class="pagetitle">

    <h1>Add Bus Feature</h1>

</div>
<section class="section dashboard mt-3">
    <div class="row">

        <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Bus Name</h5>
                    <ul>
                        <li>Ac</li>
                        <li>Free Wifi</li>
                        <li>Fan</li>
                    </ul>
                     <Link to="/add-bus-features" class="btn btn-primary">Add Feature</Link>
                </div>
            </div>
        </div>


        <div class="col-md-6 col-lg-6 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Bus Name</h5>
                    <ul>
                        <p>No Features Added</p>
                    </ul>
                    <a href="add-bus-features.html" class="btn btn-primary">Add Feature</a>
                </div>
            </div>
        </div>


    </div>
</section>

</main>
    
    </>
  )
}

export default BusFeature