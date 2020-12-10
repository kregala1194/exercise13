import React from 'react';
import './App.css';
import Navigation from './Shared/Navigation/Navigation';
import Footer from './Shared/Footer/Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;