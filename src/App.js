import React, { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom'
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Home/Home';
import NewsPage from './Components/News/News';
import ContactPage from './Components/Contact/contact'
import AboutPage from './Components/About/About';
import NavbarAdmin from './Admin/Navbar_Admin/Navbar';
import Tour from './Admin/Tour_Admin/Tour';
import { getTravelAPI } from './API/Travel';
import { Axios } from 'axios';
export const App = () => {
    useEffect(() =>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = getTravelAPI();
        console.log(data);
    }
    return (
        <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
            <Route path='/About' element={<AboutPage/>}></Route>
            <Route path='/News' element={<NewsPage/>}></Route>
            <Route path='/admin/navbar' element={<NavbarAdmin/>}></Route>
            <Route path='/admin/Tour' element={<Tour/>}></Route>
        </Routes>
       
        </>
    );
};
export default App