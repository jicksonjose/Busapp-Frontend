import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export const BusSchedule = () => {
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
        <div className='mb-3'>
        <Link to="/addschedule" className='btn btn-primary mt-2'>Add Bus Schedule</Link>
        </div>
          
      
        <section class="section">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Bus Schedule</h5>
                    <table class="table datatable">
                      <thead>
                        <tr>
                          <th> No</th>
                          <th>Bus Name</th>
                          <th>Bus Route</th>
                          <th>Date</th>
                          
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
