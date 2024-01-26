import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const AddBusFeature = () => {
    return (
        <>
            <Navbar> </Navbar>
            <main id="main" class="main">

            <div class="pagetitle">
            <h1>Add Bus Feature</h1>
     
                </div>
                <section class="section dashboard">
                    <div class="row">
                        <div class="col-md-6 col-lg-6 col-sm-6">
                            <label class="form-label">Title</label>
                            <br />
                            <input type="text" class="form-control" name="bus_name" id="" />

                            <label for="" class="form-label mt-5">Descritpion</label>
                            <br />
                            <input type="text" class="form-control" name="bus_owner_id" id="" />

                            <button type="submit" class="btn btn-success mt-5">Submit</button>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )

}
export default AddBusFeature