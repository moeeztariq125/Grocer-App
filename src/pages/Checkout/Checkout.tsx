// CheckoutPage.tsx

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import './Checkout.css'
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface PaymentMethod {
    title: string;
    img: string;
  }
const CheckoutPage: React.FC = () => {
  // Dummy data
  const paymentMethods: PaymentMethod[] = [
    { title: 'Debit/Credit card', img: '/mastercard.png' },
    { title: 'PayPal', img: '/paypal.png' },
    { title: 'Payoneer', img: '/payoneer.png' },
  ];
  const address = '789 Maple Street, Los Angeles,\n CA 90001 \n(888) 987-6543';
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 15.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 10.99, quantity: 1 },
    // Add more dummy product data as needed
  ];
  const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="checkout-page">
      <div className="header h2 bold">
      <Link to={'/bucket'} className='link-no-style'><FaArrowLeft className = 'hover'/></Link>
        <div>Checkout</div>
      </div>

      <div className="section">
        <div className='h2 bold'>Payment</div>
        <div className="payment-methods">
            {paymentMethods.map((method, index) => (
                <div key={index} className="payment-method">
                <div className='method'>
                    <img src={method.img} alt={method.title} className="payment-method-img" />
                    <div>{method.title}</div>
                </div>
                <input type='radio' name='paymentMethod' id={`paymentMethod${index}`} className='h2'/>
                </div>
            ))}
        </div>

      </div>

      <div className="section">
        <div className='h2 bold'>Delivery Details</div>
        <p className='font-color-secondary h3-2' style={{ whiteSpace: 'pre-line' }}>{address}</p>
      </div>

      <div className="section">
        <div className='h2 bold'>Order Details</div>
        <div className="order-details ">
          {products.map((product) => (
            <div key={product.id}>
            <div className='font-color-secondary'>{`${product.quantity}x ${product.name}`}</div>
            </div>
          ))}
        </div>
        <div className="footer">
        <div className="total-price"><span className='h3'>Total</span> <span className='h2-2'>{totalPrice}<span className='highlight'> $</span></span></div>
        <Link to={'/order-completion'} className='link-no-style'><button className="checkout-button">Checkout</button></Link>
      </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
