import React, { useEffect, useState } from "react";
import Navbar from "../Navbar_Admin/Navbar";
import { addTourAPI } from "../../API/Travel";
import {Link} from 'react-router-dom'
export const AddTour = () => {
  
  const AddTour = async (event) => {
    event.preventDefault();
    const IdTour = event.target[0].value;
    const NameTour = event.target[1].value;
    const DescriptionTour = event.target[2].value;
    const PriceTour = event.target[3].value;
    const StartDateTour = event.target[4].value;
    const EndDateTour = event.target[5].value;
    if (IdTour) {
      // Update
    }
    else {
      await addTourAPI({
        Id: IdTour,
        Name: NameTour,
        Description: DescriptionTour,
        Price: PriceTour,
        StartDate: StartDateTour,
        EndDate: EndDateTour
      });   
    }
  };
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Thong tin them moi danh muc</h3>
            </div>
            <div className="card-body">
              <div className="bs-stepper-content">
                <form
                  onSubmit={AddTour}
                  id="logins-part"
                  className="content"
                  role="tabpanel"
                  aria-labelledby="logins-part-trigger"
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ID Tour</label>
                    <input className="form-control" type="text" id='Id' name='Id' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name Tour</label>
                    <input className="form-control" type="text" id='Name' name='Name' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input className="form-control" type="text" id='Description' name='Description' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input className="form-control" type="text" id='Price' name='Price' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image Tour</label>
                    <input className="form-control" type="text" id='Image' name='Image' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">StartDate</label>
                    <input className="form-control" type="text" id='StartDate' name='StartDate' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">EndDate</label>
                    <input className="form-control" type="text" id='EndDate' name='EndDate' />
                  </div>
                  <div className="form-group d-flex justify-content-evenly">
                    <Link to='/admin/Tour' className="btn btn-danger">
                      Quay lai
                    </Link>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
             
                
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </section>
      </div>
    </>
  );

};
export default AddTour;
