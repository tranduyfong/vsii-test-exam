import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ProjectLocationPage from './pages/ProjectLocationPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <ProjectLocationPage />
      <Footer />
    </>
  );
}

export default App;