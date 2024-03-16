import React from 'react'
import './About.css'
import img12 from '../AssetDATRVEL/Image/img(12).jpg'
import img13 from '../AssetDATRVEL/Image/img(13).jpg'
import Footer from '../Components/Footer/Footer'
const About = () => {
  return (
    <>
  <div>
  <section className="py-3 py-md-5 py-xl-8">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="fs-5 mb-2 text-secondary text-uppercase">About</h3>
          <h2 className="display-5 mb-4" >
            "We are the ones who make your life richer"
          </h2>
          {/* <button
            type="button"
            className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5"
          >
            Connect Now
          </button> */}
        </div>
      </div>
    </div>
    <div className="container" id='container_card'>
      <div className="row gy-3 gy-md-4 gy-lg-0">
        <div className="col-12 col-lg-6">
          <div className="card bg-light p-3 m-0">
            <div className="row gy-3 gy-md-0 align-items-md-center">
              <div className="col-md-5">
                <img
                  src={img13}
                  className="img-fluid rounded-start"
                  alt="president"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body p-0">
                  <h2 className="card-title h4 mb-3">President</h2>
                  <p className="card-text lead">
                  As president of a tourism company for over 10 years, I have extensive experience in 
                  the tourism industry. I success in developing and 
                  implementing strategic plans, managing and motivating teams, 
                  and achieving financial goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card bg-light p-3 m-0">
            <div className="row gy-3 gy-md-0 align-items-md-center">
              <div className="col-md-5">
                <img
                  src={img12}
                  className="img-fluid rounded-start"
                  alt="Visionary Team"
                />
              </div>
              <div className="col-md-7">
                <div className="card-body p-0">
                  <h2 className="card-title h4 mb-3">Visionary Team</h2>
                  <p className="card-text lead">
                  With over 10 years of experience in the tourism industry, our team has accumulated 
                  extensive knowledge and expertise. We have worked with various partners to provide 
                  high-quality tourism services to customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </div>
</>

  )
}

export default About