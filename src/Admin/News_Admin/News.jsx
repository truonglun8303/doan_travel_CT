import React from 'react'

const News = () => {
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
            <div className="card-body">
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
                    <Link to="/admin/AddNews" className="btn btn-primary">
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
                  <tr>
                    <th>
                      <input type="checkbox" id="SelectAll" />
                    </th>
                    <th className="text-center">STT</th>
                    <th className="text-center">Id Tour</th>
                    <th className="text-center">Image Tour</th>
                    <th className="text-center">Name Tour</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">StartDate</th>
                    <th className="text-center">EndDate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="">
                    <td>
                      {/* <input
                        type="checkbox"
                        className="cbkItem"
                        defaultValue="@item.Id"
                      /> */}
                    </td>
                    <td className="text-center"></td>
                    <td>
                      <img src="" width="80px" />
                    </td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>

                    {/* <td className="text-center">
                      <a href="" className="btn btn-sm btn-primary">
                        correct
                      </a>
                      <a href="#" className="btn btn-sm btn-danger btnDelete">
                        Delete
                      </a>
                    </td> */}
                  </tr>
                  <tr>
                    <td colSpan={4}>No Content !!!</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default News