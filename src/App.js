import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ContactPage from './Components/Contact/contact'
import { Router } from '@mui/icons-material';
export const App = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
        </>
    );
};
export default App