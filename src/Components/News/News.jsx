import React from 'react'
import './news.css';
import img1 from '../../AssetDATRVEL/Image/img(1).jpg'
import Navbar from '../Navbar/Navbar';
const Data = [
    {
    id: 1,
    imgSrc: img1,
    destTitle:'Bora Bora',
    description:'ABCABCABCABC'
    }
]
const News = () => {
  return (
    <>
    {
        
        Data.map(({id,imgSrc,description,destTitle}) =>{
            return(
<div>
  <Navbar/>
  <section  id='news_card' className="row gx-5">
   
            <div key={id} className="col-md-6 mb-4">
            <div
                className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                data-mdb-ripple-color="light"
            >
                <img
                src={imgSrc}
                className="img-fluid"
                />
                <a href="#!">
                <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
                </a>
            </div>
            </div>
            <div className="col-md-6 mb-4">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                News of the day
            </span>
            <h4>
                <strong>{destTitle}</strong>
            </h4>
            <p className="text-muted">
            {description}
            </p>
            <button type="button" className="btn btn-primary">
                Read more
            </button>
            </div>
     
  </section>
</div>
  )
})
}
</>
  )
}

export default News