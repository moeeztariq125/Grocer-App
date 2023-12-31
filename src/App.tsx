import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductPage from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import BucketPage from './pages/Bucket/Bucket';
import CheckoutPage from './pages/Checkout/Checkout';

const App: React.FC = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path="/product/:productId" element={<ProductPage/>} />
          <Route path='/bucket' element={<BucketPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
    </Router>
  );
};

export default App;
