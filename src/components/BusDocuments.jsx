import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const BusDocuments = () => {
  return (
    <>
<Navbar></Navbar>
<main id="main" class="main">

<div class="pagetitle">
    <Link to='/upload-documents' className='btn btn-primary'>Upload Bus Documents</Link>
    
</div>
<section class="section dashboard mt-3">
    <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-6 d-flex">
            <div class="card" >
                <img src="https://media.istockphoto.com/id/135327019/photo/white-passenger-bus.jpg?s=612x612&w=0&k=20&c=sRU5BpOsY6fyYj9pMiAxz0dLML--uoNl7rIXelRbFnc=" class="card-img-top" alt="img"/>
                <div class="card-body">
                    <h5 class="card-title">Bus Names</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>
                    <div class="row  ">
                        <div class="col-md-8 col-lg-8">
                            <p class="nav-heading">Status : <span class="text-success">Approved</span>
                            </p>
                        </div>
                        <div class="col">
                            <a href="delete-bus-document.html"><i class="bi bi-pencil-square"></i></a>
                        </div>
                        <div class="col">
                            <a href="edit-bus-details.html"><i class="bi bi-trash3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-6 d-flex">
            <div class="card" >
                <img src="https://svmchaser.files.wordpress.com/2015/02/c6f67-11004312_688275707947991_663692788_n.jpg?w=640&h=480" class="card-img-top" alt="img"/>
                <div class="card-body">
                    <h5 class="card-title">Bus Name</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>
                    <div class="row">
                        <div class="col-md-8 col-lg-8">
                            <p class="nav-heading">Status : <span class="text-danger">Pending</span>
                            </p>
                        </div>
                        <div class="col">
                            <a href="delet-bus-details.htmls"><i class="bi bi-pencil-square"></i></a>
                        </div>
                        <div class="col">
                            <a href="edit-bus-details.html"><i class="bi bi-trash3"></i></a>
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

export default BusDocuments