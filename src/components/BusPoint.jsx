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
                      <tbody>
                        <tr>
                          <td>Unity Pugh</td>
                          <td>9958</td>
                          <td>Curicó</td>
                          <td>2005/02/11</td>
                          <td>37%</td>
                        </tr>
                        <tr>
                          <td>Theodore Duran</td>
                          <td>8971</td>
                          <td>Dhanbad</td>
                          <td>1999/04/07</td>
                          <td>97%</td>
                        </tr>
                        <tr>
                          <td>Kylie Bishop</td>
                          <td>3147</td>
                          <td>Norman</td>
                          <td>2005/09/08</td>
                          <td>63%</td>
                        </tr>
                        <tr>
                          <td>Willow Gilliam</td>
                          <td>3497</td>
                          <td>Amqui</td>
                          <td>2009/29/11</td>
                          <td>30%</td>
                        </tr>
                        <tr>
                            <td>Haviva Hernandez</td>
                            <td>8136</td>
                            <td>Suwałki</td>
                            <td>2000/30/01</td>
                            <td>16%</td>
                          </tr>
                          <tr>
                            <td>Alisa Horn</td>
                            <td>9853</td>
                            <td>Ucluelet</td>
                            <td>2007/01/11</td>
                            <td>39%</td>
                          </tr>
                          <tr>
                            <td>Zelenia Roman</td>
                            <td>7516</td>
                            <td>Redwater</td>
                            <td>2012/03/03</td>
                            <td>31%</td>
                          </tr>
                          <tr>
                            <td>Unity Pugh</td>
                            <td>9958</td>
                            <td>Curicó</td>
                            <td>2005/02/11</td>
                            <td>37%</td>
                          </tr>
                          <tr>
                            <td>Theodore Duran</td>
                            <td>8971</td>
                            <td>Dhanbad</td>
                            <td>1999/04/07</td>
                            <td>97%</td>
                          </tr>
                          <tr>
                            <td>Kylie Bishop</td>
                            <td>3147</td>
                            <td>Norman</td>
                            <td>2005/09/08</td>
                            <td>63%</td>
                          </tr>
                          <tr>
                            <td>Willow Gilliam</td>
                            <td>3497</td>
                            <td>Amqui</td>
                            <td>2009/29/11</td>
                            <td>30%</td>
                          </tr>
                          <tr>
                              <td>Haviva Hernandez</td>
                              <td>8136</td>
                              <td>Suwałki</td>
                              <td>2000/30/01</td>
                              <td>16%</td>
                            </tr>
                            <tr>
                              <td>Alisa Horn</td>
                              <td>9853</td>
                              <td>Ucluelet</td>
                              <td>2007/01/11</td>
                              <td>39%</td>
                            </tr>
                            <tr>
                              <td>Zelenia Roman</td>
                              <td>7516</td>
                              <td>Redwater</td>
                              <td>2012/03/03</td>
                              <td>31%</td>
                            </tr>
                        </tbody>
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