import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Swal from 'sweetalert2';

const UploadDocuments = () => {

  const [inputField, SetInputField] = useState({
    "busowner": sessionStorage.getItem("id"),
    "busRc": "",
    "owner_ID": ""

})

const inputHandler = (event) => {
    SetInputField({ ...inputField, [event.target.name]: event.target.value })
}

const readValue = () => {
    console.log(inputField)
    axios.post("http://127.0.0.1:8000/bus/add_bus_document/", inputField).then(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'successfully added',
            text: 'Please wait for the verification',
        });
        }
    )
}

  return (
    <>
    <Navbar></Navbar>
    <main id="main" class="main">
         <div class="pagetitle">
            <h1>Upload Documents</h1>
        </div>
        <section class="section dashboard">
            <div class="row">
                <div class="col-md-6 col-lg-6 col-sm-6">
                    <label class="form-label">user id</label>
                   
                    <input type="text" class="form-control"  name='busowner' value={inputField.busowner} onChange={inputHandler}/>

                    <label class="form-label">Upload the vehicle RC</label>
                    <input type="text" class="form-control" name="busRc" id="" value={inputField.busRc} onChange={inputHandler} />
        
                    {/* <label for="" class="form-label mt-5">upload the vehicle photo</label>
                    <br/>
                    <input type="file" class="form-control" name="bus_photo" id=""/> */}
        
                    <label for="" class="form-label mt-5">upload the Owner ID</label>
                    <br/>
                    <input type="text" class="form-control" name="owner_ID" value={inputField.owner_ID} onChange={inputHandler}/>
                    <button className='btn btn-success mt-2' onClick={readValue}>Submit</button>
                </div>
            </div>
        </section>
        </main>
    </>
  )
}

export default UploadDocuments