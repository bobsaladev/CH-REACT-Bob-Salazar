import React from 'react';
import NavBar from './components/NavBar';
import MainBody from "./components/MainBody";
import Footer from './components/Footer';
import './styles/main-styles.css';

const App = () => {
  return (
    <>
        <NavBar />
        <MainBody />
        <Footer />
    </>
  )
}

export default App