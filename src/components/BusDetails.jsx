import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const BusDetails = () => {
  return (
    <>
    <Navbar></Navbar>
     <main id="main" class="main">
        <div class="pagetitle">
            <h1>Add Bus Details</h1>
            <Link to="/add-bus-details" class="btn btn-primary mt-5">Add Bus Details</Link>
        </div>
        <section class="section dashboard mt-3">
            <div class="row">
                <div class="col-md-6 col-lg-6 col-sm-6">
                    <div class="card" >
                        <img src="" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Bus Name</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <div class="row">
                                <div class="col-md-8 col-lg-8">

                                </div>
                                <div class="col">
                                    <a href="#"><i class="bi bi-pencil-square"></i></a>
                                </div>
                                <div class="col">
                                    <a href="#"><i class="bi bi-trash3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-6">
                    <div class="card" >
                        <img src="" class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Bus Name</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <div class="row">
                                <div class="col-md-8 col-lg-8">

                                </div>
                                <div class="col">
                                    <a href="#"><i class="bi bi-pencil-square"></i></a>
                                </div>
                                <div class="col">
                                    <a href="#"><i class="bi bi-trash3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </main>
    </>
  )
}

export default BusDetails