import React,{useEffect} from 'react';
import './home.css';
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css'
import video from '../../AssetDATRVEL/Video/video.mp4';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Home = () => {
useEffect(()=>{
  Aos.init({duration: 2000})
},[])


  return (
    <div>
      <Navbar/>
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop typeof='video/mp4'></video>
      <div className='homeContent container'>
        <div className='textDiv'>
          
          <span data-aos='fade-up' className='smallText'>
            Our Packages
          </span>
          
          <h1 data-aos='fade-up' className='homeTitle'>
            Search your holiday
          </h1>

        </div>
        <div data-aos='fade-up' className="cardDiv gird">
            <div className='destinationInput'>
              <label htmlFor='city'>
                Search your destination: 
              </label>
              <div className='input flex_home'>
                <input type='text' placeholder='Enter name here....'/>
                <GrLocation className='icon'/>
              </div>
            </div>

            <div className='dateInput'>
              <label htmlFor='date'>
                Select your date:
              </label>
              <div className='input flex_home'>
                <input type='date' placeholder='Enter name here....'/>
              </div>
            </div>

            <div className='priceInput'>
              <div className='label_total flex_home'>
                <label htmlFor='price'>Max price: </label>
                <h3 className='total'>5000$</h3>
              </div>
              <div className='input flex_home'>
                <input type='range' max={5000} min={1000}></input>
              </div>
            </div>
            <div className='searchOptions flex_home'>
              <HiFilter className='icon'/>
              <span>MORE FILTERS</span>
            </div>
        </div>
        <div data-aos='fade-up' className='homeFooterIcons flex_home'>
            <div className='rightIcons'>
                <FiFacebook className='icon'/>
                <FaInstagram  className='icon'/>
                <FaTelegram className='icon'/>
            </div>
            <div className='leftIcons'>
            <CiCircleList className='icon'/>  
            <TbApps  className='icon'/>  
            </div>
        </div>
      </div>

    </section>
    <Main/>
    <Footer/>
    </div>
   
    
  )
}

export default Home
