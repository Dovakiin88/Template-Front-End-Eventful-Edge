import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Sidebar_Navigation from './Navigation/sidebar';
import MainPage from './Template_section/Main_Page';
import Topbar from './Header/topbar';
import Footer from './Footer/Footer';
import CreatePage from './Pages/Create';
import './app.css'


const drawerWidth = 200;

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar_Navigation sx={{ zIndex: '1' }} elevation={1} />

      <div style={{ backgroundColor: 'black', width: '305px' }}></div>

      <Box sx={{ bgcolor: 'black', display: 'flex', flexDirection: 'column', height: '100vh', flexGrow: '1' }}>
        <Box sx={{ backgroundColor: 'gray' }}>
          <Topbar />
        </Box>

        <Box sx={{ padding: '3px', backgroundColor: 'black', marginLeft: '0px' }}>
          <MainPage />
        </Box>

        <Box sx={{ padding: '3px', backgroundColor: '#A9A9A9', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
