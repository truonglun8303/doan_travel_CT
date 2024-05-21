import React, { useEffect, useState } from "react";
import Navbar from "../Navbar_Admin/Navbar";
import { Link } from "react-router-dom";
import './Tour.css';
import axios from 'axios'
// import { getTourAPI } from "../../API/Travel";


const Tour = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/Tours')
    .then(res => setData(res.data)
    )
    .catch(err => console.log(err))
  })

  const handleDelete = async (id) =>{
    try{
      await axios.delete('http://localhost:8081/delTours/' + id)
      window.location.reload()
    }
    catch(err){
        console.log(err);
    }
  }

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Tour List</h3>
            </div>
            <div className="card-body-search" >
              <div className="row">
                <div className="col-6">
                  <div className="form-group d-flex">
                    <div className="custom-file">
                      <input type="text" className="form-control" />
                    </div>
                    <span className="input-group-append">
                      <button type="submit" className="btn btn-info btn-flat">
                        Search
                      </button>
                    </span>
                  </div>
                  <div className="card-tools">
                    <Link to="/admin/AddTour" className="btn btn-primary">
                      Add
                    </Link>
                    {/* <a href="#" className="btn btn-danger" id="BtnDeleteAll">
                      Delete
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr >
                    {/* <th>
                      <input type="checkbox" id="SelectAll" />
                    </th> */}
                    {/* <th className="text-center">STT</th> */}
                    <th className="text-center flex-grow-1 ms-3">Name Tour</th>
                    <th className="text-center flex-grow-1 ms-3">Image Tour</th>
                    <th className="text-center flex-grow-1 ms-3">Description Tour</th>
                    <th className="text-center flex-grow-1 ms-3">Price</th>
                    <th className="text-center flex-grow-1 ms-3">StartDate</th>
                    <th className="text-center flex-grow-1 ms-3">EndDate</th>
                  </tr>
                </thead>
                <tbody>
                  
                    {data?( 
                    
                        data.map((item,key) => (
                          <tr  key={key}>
                            <td className="text-center flex-grow-1 ms-3">{item.title}</td>
                            <td className="text-center flex-shrink-0 "><img className="images_admin" src={`http://localhost:8081/images/` + item.image} alt="" /></td>
                            <td className="text-center flex-grow-1 ms-3">{item.description}</td>
                            <td className="text-center flex-grow-1 ms-3">{item.price}$</td>
                            <td className="text-center flex-grow-1 ms-3">{item.startdate}</td>
                            <td className="text-center flex-grow-1 ms-3">{item.enddate}</td>
                            <td className="text-center">
                            <Link to={`update/${item.ID}`} className="btn btn-sm btn-primary">
                              correct
                            </Link>
                            <button className="btn btn-sm btn-danger btnDelete" onClick={ e => handleDelete(item.ID)}>
                              Delete
                            </button>
                    </td> 
                          </tr>

                        ))
                    
                     
                     ) : (
                      <tr>
                        <td colSpan={4}>No Content !!!</td>
                      </tr>
                    )}   
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tour;
