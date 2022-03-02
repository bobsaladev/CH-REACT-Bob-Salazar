import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import './styles/main-styles.css';
import './styles/ilc-style.css';
import './styles/footer-style.css';


const App = () => {
  return (
    <>
        <NavBar />
        <ItemListContainer />
        <Footer />
    </>
  )
}

export default App