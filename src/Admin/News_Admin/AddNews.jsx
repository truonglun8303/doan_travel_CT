import React from 'react'

const AddNews = () => {
  return (
    <>
    <Navbar/>
    <div className="content-wrapper">
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
                <label htmlFor="exampleInputEmail1">Name Tour</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Description</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Price</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Image Tour</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">StartDate</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">EndDate</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="form-group d-flex justify-content-evenly">
                <a href="/admin/News" className="btn btn-danger">
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
    </div>
      </>
  )
}

export default AddNews