import React,{useEffect,useState} from 'react'
import './main.css'
import axios from 'axios'
import img from '../../AssetDATRVEL/Image/img(1).jpg'
import img2 from '../../AssetDATRVEL/Image/img(2).jpg'
import img3 from '../../AssetDATRVEL/Image/img(3).jpg'
import img4 from '../../AssetDATRVEL/Image/img(4).jpg'
import img5 from '../../AssetDATRVEL/Image/img(5).jpg'
import img6 from '../../AssetDATRVEL/Image/img(6).jpg'
import img7 from '../../AssetDATRVEL/Image/img(7).jpg'
import img8 from '../../AssetDATRVEL/Image/img(8).jpg'
import img9 from '../../AssetDATRVEL/Image/img(9).jpg'
import img10 from '../../AssetDATRVEL/Image/img(10).jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from 'aos';
import 'aos/dist/aos.css'

// const Data = [
//   {
//     id:1,
//     imgSrc: img,
//     destTitle:'Bora Bora',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:2,
//     imgSrc: img2,
//     destTitle:'HAHA HAHA',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:3,
//     imgSrc: img3,
//     destTitle:'HIHI HIHI',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:4,
//     imgSrc: img4,
//     destTitle:'HAHA HAHA',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:5,
//     imgSrc: img5,
//     destTitle:'HAHA HAHA',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:6,
//     imgSrc: img6,
//     destTitle:'HAHA HAHA',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:7,
//     imgSrc: img7,
//     destTitle:'HAHA HAHA',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:8,
//     imgSrc: img8,
//     destTitle:'HAHA HAHA',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   {
//     id:9,
//     imgSrc: img9,
//     destTitle:'HAHA HAHA',
//     location: 'New Zealand',
//     grade: 'CULTURAL RELAX',
//     fees: '$700',
//     description:'ABCABCABCABC'
//   },
//   // {
//   //   id:2,
//   //   imgSrc: img10,
//   //   destTitle:'HAHA HAHA',
//   //   location: 'New Zealand',
//   //   grade: 'CULTURAL RELAX',
//   //   fees: '$700',
//   //   description:'ABCABCABCABC'
//   // },
// ]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/Tours')
    .then(res => setData(res.data)
    )
    .catch(err => console.log(err))
  })


  return (
    <section className='main contaienr section'>
      <div className='secTitle'>
        <h3 data-aos='fade-right' className='title'>
          Most visited destinations
        </h3>  
      </div> 
      <div className='secContent grid'>
        
         {data?(            
          data.map((item,ID) => (  
            <div key={ID} data-aos='fade-up' className='singleDestination'>
            <div className='imageDiv'>
              <img src={`http://localhost:8081/images/` + item.image} alt={ID}/>
            </div>
            <div className='cardInfo'>
              <h4 className='destTitle'>{item.title}</h4>
              <span className='continent flex_home'>
                <HiOutlineLocationMarker className='icon' />
                <span className='name'>abc</span>
              </span>

              <div className='fees flex_home'>
                <div className='grade'>
                  <span>CULTURAL RELAX<small>+1</small></span>
                </div>
                <div className='price'>
                  <h5>{item.price}$</h5>
                </div>
              </div>
              <div className='desc'>
                <p>{item.description}</p>
              </div>
              <button className='btn_home flex_home'>
                DETAILS <LuClipboardCheck className='icon' />
              </button>
            </div>
        </div>
            ))         
        ) : (
         <tr>
           <td colSpan={4}>No Content !!!</td>
         </tr>
       )}   

          {/* Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) =>{  */}
          {/* //     return(
          //       <div key={id} data-aos='fade-up' className='singleDestination'>
          //           <div className='imageDiv'>
          //             <img src={imgSrc} alt={destTitle}/>
          //           </div>
          //           <div className='cardInfo'>
          //             <h4 className='destTitle'>{destTitle}</h4>
          //             <span className='continent flex_home'>
          //               <HiOutlineLocationMarker className='icon' />
          //               <span className='name'>{location}</span>
          //             </span>

          //             <div className='fees flex_home'>
          //               <div className='grade'>
          //                 <span>{grade}<small>+1</small></span>
          //               </div>
          //               <div className='price'>
          //                 <h5>{fees}</h5>
          //               </div>
          //             </div>
          //             <div className='desc'>
          //               <p>{description}</p>
          //             </div>
          //             <button className='btn_home flex_home'>
          //               DETAILS <LuClipboardCheck className='icon' />
          //             </button>
          //           </div>
          //       </div>
          //     )
          // }) */}
        {/* } */}
      </div>
    </section>
  )
}

export default Main