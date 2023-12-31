import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductPage from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path="/product/:productId" element={<ProductPage/>} />
        </Routes>
    </Router>
  );
};

export default App;
