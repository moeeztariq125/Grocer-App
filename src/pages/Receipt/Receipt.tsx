import { FaArrowLeft } from 'react-icons/fa6';
import './Receipt.css'
import { Link } from 'react-router-dom';
const ReceiptPage: React.FC = () => {
  return (
    <>
      <div className='arrow-header'>
      <Link to={'/'} className='link-no-style'><FaArrowLeft className = 'hover h2 bold'/></Link>
      </div>
    <div className="order-completion-page">
      <div className='h2 bold'>"Congratulations! Your Order Has Been Placed!"</div>
      <img src="/bike.png" alt="Order Placed" className="order-image" />
      <p className='p font-color-secondary'>
        Thank you for choosing our services! Your order has been successfully placed and is now being processed. We appreciate your trust in us and look forward to serving you.
      </p>
      <Link to={'/'}><button  className="return-home-button h2">Return Home</button></Link>
    </div>
    </>
  );
};

export default ReceiptPage;
