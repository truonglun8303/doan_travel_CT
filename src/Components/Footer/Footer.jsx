import React,{useEffect} from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import { MdTravelExplore } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css'
import video2 from '../../AssetDATRVEL/Video/video(1).mp4'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted typeof='video/mp4'></video>
      </div>
      <div className='secContent container'>
        <div className='contactDiv flex_home'>
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className='inputDiv flex'>
            <input data-aos='fade-up' type='text' placeholder='Enter Email Address'/>
            <button data-aos='fade-up' className='btn_home flex_home' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex_home'>
            <div className='footerIntro flex_home'>
              <div className='logoDiv'>
                <a href='#' className='logo flex_home'>
                  <MdTravelExplore className='icon' /> Travel.
                </a>
              </div>

              <div data-aos='fade-up' className='footerParagraph'>
                ABC
              </div>
              <div data-aos='fade-up' className='footerSocials flex_home'>
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaInstagram  className='icon' />
              </div>
            </div>

            <div className='footerLinks grid'>
                {/* Group 1 */}
                <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup'>
                  <span className='groupTitle'>
                    OUR AGENCY
                  </span>
                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Services
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Insurance
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Agency
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Tourism
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Payment
                  </li>
                </div>
                {/* Group 2 */}
                <div data-aos='fade-up' data-aos-duration='4000' className='linkGroup'>
                  <span className='groupTitle'>
                    PARTNERS
                  </span>
                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Bookings
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Rentcars
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    HostelWorld
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Trivago
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    TripAdvisor
                  </li>
                </div>
                 {/* Group 3 */}
                <div data-aos='fade-up' data-aos-duration='5000' className='linkGroup'>
                  <span className='groupTitle'>
                    LAST MINUTE
                  </span>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon' />
                    London
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    California
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Indonesia
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Europe
                  </li>

                  <li className='footerList flex_home'>
                    <FiChevronRight className='icon' />
                    Oceania
                  </li>
                </div>
            </div>
            <div className='footerDiv flex_home'>
              <small>BEST TRAVEL WEBSITE @2024</small>
              <small>FullStack: PHAM QUANG TRUONG </small>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer