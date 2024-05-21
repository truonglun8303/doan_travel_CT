import React, { useEffect, useState } from "react";
import Navbar from "../Navbar_Admin/Navbar";
import {Link} from 'react-router-dom'
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom'
export const UpdateTour = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, SetDescription] = useState("");
  const [price, setPrice] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  const upload = () =>{
    const formData = new FormData()
    formData.append("title",title);
    formData.append('file',file);
    formData.append("description",description);
    formData.append("price",price);
    formData.append("startdate",startdate);
    formData.append("enddate",enddate)
   
    // event.preventDefault();
    axios.put('http://localhost:8081/update/' + id,formData) /*{title,file,description,price,startdate,enddate}*/
    .then(res => {
        navigate('/admin/Tour');
    })
    .catch(err => console.log(err));
  }
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Update Tour</h3>
            </div>
            <div className="card-body">
              <div className="bs-stepper-content">
                <div
  
                  id="logins-part"
                  className="content"
                  aria-labelledby="logins-part-trigger"
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title Tour</label>
                    <input className="form-control" type="text" id='Title' name='Name' onChange={e => setTitle(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Image Tour</label>
                    <input className="form-control" type="file" id='Image' name='Image' onChange={(e) => setFile(e.target.files[0])} />
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input className="form-control" type="text" id='Description' name='Description' onChange={e => SetDescription(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input className="form-control" type="text" id='Price' name='Price' onChange={e => setPrice(e.target.value)} />
                  </div>
                 
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">StartDate</label>
                    <input className="form-control" type="text" id='StartDate' name='StartDate' onChange={e => setStartdate(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">EndDate</label>
                    <input className="form-control" type="text" id='EndDate' name='EndDate' onChange={e => setEnddate(e.target.value)} />
                  </div>
                 
                  <div className="form-group d-flex justify-content-evenly">
                    <Link to='/admin/Tour' className="btn btn-danger">
                      Quay lai
                    </Link>
 
                    <button type="button" onClick={upload} className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
             
                
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </section>
      </div>
    </>
  );

};
export default UpdateTour;
