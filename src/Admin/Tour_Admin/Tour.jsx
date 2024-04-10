import React from "react";
import Navbar from "../Navbar_Admin/Navbar";

const Tour = () =>{
    return(
        <>
        <Navbar/>
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Thong tin them moi danh muc</h3>
            </div>
            <div className="card-body">
              <div className="bs-stepper-content">
                <div
                  id="logins-part"
                  className="content"
                  role="tabpanel"
                  aria-labelledby="logins-part-trigger"
                >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ten danh muc</label>
                    <input type="text"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mo ta</label>
                    <input type="text"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Thu tu</label>
                    <input type="text"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Seo Title ta</label>
                    <input type="text"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Seo Description</label>
                    <input type="text"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Seo Key</label>
                    <input type="text"/>
                  </div>
                  <div className="form-group">
                    <a href="/admin/category" className="btn btn-danger">
                      Quay lai
                    </a>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
      
          <div className="card-footer"></div>
        </section>
          </>
    )
   
};
export default Tour;