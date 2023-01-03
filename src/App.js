import React  from 'react';
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header'
import './App.css';
import OptionsTab from './components/OptionsTab';
import Container from '@mui/material/Container'
import LocationCards from './components/LocationCards';
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<LandingPage/>}/>
     <Route/>
   </Routes>
   </BrowserRouter>
   </>   
  );
}

export default App;
