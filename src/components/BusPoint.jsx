import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const BusPoint = () => {
  return (
    <>
    <Navbar></Navbar>
    <main id="main" class="main">
        
        <div class="search-bar">
            <div class="row">
                <div class="col-md-4">
                    <form class="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" class="form-control" title="Enter search keyword"/>
                        <button type="submit" class="btn btn-success" title="Search"><i class="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
           
        </div>
        <div class="pagetitle mt-2">
          
            <Link to='/add-bus-points' class="btn btn-primary">Add Bus Point</Link>
        </div>
        <section class="section">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Bus Routes</h5>
                    <table class="table datatable">
                      <thead>
                        <tr>
                          <th> No</th>
                          <th>Route</th>
                          <th>Starting Point</th>
                          <th>Destination Point</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      
                      </table>
        
                    </div>
                  </div>
        
                </div>
              </div>
            </section>
    </main>
    </>
  )
}

export default BusPoint