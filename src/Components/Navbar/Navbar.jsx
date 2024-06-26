import React,{useState} from 'react';
import  './navbar.css';
import '../../App.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import {Link} from 'react-router-dom'
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  // POST DATA USER
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, SetPhone] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const upload = () =>{
    const formData = new FormData()
    formData.append("firstname",firstname);
    formData.append('lastname',lastname);
    formData.append("phone",phone);
    formData.append("email",email);
    formData.append("destination",destination);

    // event.preventDefault();
    axios.post('http://localhost:8081/createuser',formData) /*{title,file,description,price,startdate,enddate}*/
    .then(res => {
        navigate('/admin/');
    })
    .catch(err => console.log(err));
  }
  //  START NAVBAR
    const [active, setActive] = useState('navBar');
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    const removeNavbar = () =>{
        setActive('navBar')
    }    
  //  START BOOK

    //  START BOOK
    const [activehide, setActivehide] = useState('form-user');
    const showform = () =>{
      setActivehide('form-user hide')
    }
    const removeform = () =>{
      setActivehide('form-user')
    }    
//  END BOOK
// //  START CURSOR
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e=> {
//     cursor.setAttribute("style", "top:" + (e.pageY - 20) +"px; left: " + (e.pageX - 20) + "px;")
// })
// //  END CURSOR
  return (
    
    <section className='navBarSection'>
      {/* <div class="cursor">
        <div class="cursor-1"></div>
      </div> */}
        <header className='header flex_home'>
            <div className='logoDiv'>
                <div className='logo flex_home'>

                    <h1>HinaTravel.</h1>
                    <h1>HinaTravel.</h1>
               
                </div>
            </div>
            <div className={active}>
                <ul className='navlists flex_home'>
                    <li className='navItem'>
                        <Link to='/' className='navLink'>Home</Link>
                    </li>

                    <li className='navItem'>
                        <Link to="/about" className='navLink'>About</Link>
                    </li>

                    <li className='navItem'>
                        <a href="#" className='navLink'>Pages</a>
                    </li>

                    <li className='navItem'>
                        <Link to="/news" className='navLink'>News</Link>
                    </li>

                    <li className='navItem'>
                        <Link to="/contact" className='navLink'>Contact</Link>
                    </li>

                    <button onClick={showform} className='user btn_home'>
                        <a href='#'>BOOK NOW</a>
                    </button>
                </ul>

                <div onClick={removeNavbar} className='closeNavbar' >
                <IoIosCloseCircle className='icon' />
                </div>
            </div>

            <div onClick={showNav} className='toggleNavbar'>
            <PiDotsNineBold className='icon'/>
            </div>
        </header>

        <div className="form-user-background">
          <nav className={activehide}>
                <div className='close_ratato_icon'>
                  <div  className="close"></div>
                  <div onClick={removeform} className='close_icon'><IoClose className='icon' /></div>
                </div>
                
              <div className="contact-travel">
                <h1>Contact a Travel Researcher</h1>
                <div className="contact-rotate"></div>
                <div className='contact-phone'>
                  <LuPhone className='icon'/><br/>
                  all Us <br/>
                  +84 9877.364.83
                 <p>We're online now</p> 
                </div>
              </div>
              <div className="info-user">
                <h1>
                  Contact us by <br/> sending a message
                </h1>
                <p>
                    We always aim to reply within 24 hours.
                </p>
            {/* <!-- Start Form Login --> */}
              <div className="input-info" action="">
                <ul className="name">
                  <li className="form-filed">
                    <input id='Firstname' name='Firstname' className="form-input" type="text" placeholder=" " onChange={e => setFirstname(e.target.value)}/>
                    <label htmlFor="name" className="form-label">First name (required)</label>
                  </li>
                  <li className="form-filed">
                    <input id='Lastname' name='Lastname' className="form-input" type="text" placeholder=" " onChange={e => setLastname(e.target.value)} />
                    <label htmlFor="name" className="form-label">Last name (required)</label>
                  </li>
                </ul>
                <ul className="email-phone">
                  <li className="form-filed">
                    <input id='Phone' name='Phone' className="form-input" type="text" placeholder=" " onChange={e => SetPhone(e.target.value)} />
                    <label htmlFor="name" className="form-label">Telephone (required)</label>
                  </li>

                  <li className="form-filed">
                    <input id='Email' name='Email' className="form-input" type="text" placeholder=" " onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="name" className="form-label">Email (required)</label>
                  </li>
                </ul>
                
                <div className="number-of-traveller">
                    <div className="form-filed">
                        <input id='Destination' name='Destination' className="form-input" type="text" placeholder=" " onChange={e => setDestination(e.target.value)}/>
                        <label htmlFor="name" className="form-label">Destination (required)</label>
                    </div>
                </div>

                <div className="Interests">
                    <div className="book">
                        <button type='submit' onClick={upload} >Buy Ticket</button>
                    </div>
                </div>
              </div>
            {/* <!-- End Form Login --> */}
              </div>
          </nav>
        </div>
      {/* <!-- End Full Form Login --> */}
           
    </section>
    
  )
}

export default Navbar