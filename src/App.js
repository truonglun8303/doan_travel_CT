import React, { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom'
// import './App.css';

import HomePage from './Components/Home/Home';
import NewsPage from './Components/News/News';
import ContactPage from './Components/Contact/contact'
import AboutPage from './Components/About/About';
import NavbarAdmin from './Admin/Navbar_Admin/Navbar';
import LoginAdmin from './Admin/Login_Admin/Login';
import HomeAdmin from './Admin/Home_Admin/Home';
import Tour from './Admin/Tour_Admin/Tour';
import AddTour from './Admin/Tour_Admin/AddTour';
import UpdateTour from './Admin/Tour_Admin/UpdateTour'
// import { getTourAPI } from './API/Travel';

import News from './Components/News/News';
export const App = () => {
    // useEffect(() =>{
    //     fetchData();
    // },[]);
    // const fetchData = async () =>{
    //     const data = getTourAPI();
    //     console.log(data);
    // }
    return (
        <>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
            <Route path='/About' element={<AboutPage/>}></Route>
            <Route path='/News' element={<NewsPage/>}></Route>
            <Route path='/admin/home' element={<HomeAdmin/>}></Route>
            <Route path='/admin/navbar' element={<NavbarAdmin/>}></Route>
            <Route path='/admin/login' element={<LoginAdmin/>}></Route>
            <Route path='/admin/AddTour' element={<AddTour/>}></Route>
            <Route path='/admin/Tour' element={<Tour/>}></Route>
            <Route path='/admin/Tour/update/:id' element={<UpdateTour/>}></Route>
            <Route path='/admin/News' element={<News/>}></Route>

        </Routes>
       
        </>
    );
};
export default App