import React, { useEffect } from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Home/Home';
import NewsPage from './Components/News/News';
import ContactPage from './Components/Contact/contact'
import AboutPage from './Components/About/About';
import LoginPage from './Admin/Login_Admin/Login'
import HomeAdmin from './Admin/Home_Admin/Home';
import { Login, Router } from '@mui/icons-material';
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
            <Route path='/admin/login' element={<LoginPage/>}></Route>
            <Route path='/admin/home' element={<HomeAdmin/>}></Route>
        </Routes>
        </>
    );
};
export default App