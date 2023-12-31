import  { useState } from 'react';
import './Product.css'; // Make sure to have your styles in a separate CSS file
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { CiCircleMinus, CiCirclePlus  } from "react-icons/ci";
import { Link } from 'react-router-dom';

const ProductPage = ({ title='',  price=10.2 }:props) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    // Implement your logic for adding the product to the cart
    console.log(`Added ${quantity} item(s) of ${title} to the cart.`);
  };

  return (
    <div className='product_page'>
    <div className="product-container">
      <div className="header-icons h2 ">
        <Link to={'/'} className='link-no-style'><FaArrowLeft className = 'hover'/></Link>
        <div><FaRegHeart className = 'hover'/></div>
      </div>

      {/* <div className="product-title">{title}</div> */}
      <div className="h2 bold">Grilled Beef Steak with Mushroom sauce</div>
      <div className="h3-2 font-color-secondary">By Steak house</div>
      
      <div className="h3">⭐ 4.5</div>

      <div className="quantity-section">
        <div className="quantity-controls highlight h2-2">
          <button onClick={increaseQuantity} className="quantity-control highlight h2-2"><CiCirclePlus/></button>
          <span >{quantity}</span>
          <button onClick={decreaseQuantity} className="quantity-control highlight h2-2"><CiCircleMinus/></button>
        </div>
        <img className="dish-image" src='/Meat2.png' alt={title} />
      </div>
      <div className='description-section'>
      <div className="h3-2 bold">Description</div>
      <div className="description font-color-secondary">Indulge in the mouthwatering delight of a perfectly grilled beef steak generously topped with a rich and savory mushroom sauce.</div>
      </div>
    </div>
    <div className="price-section">
        <div className="price">${(price * quantity).toFixed(2)}</div>
        <Link to={'/'} className='link-no-style'><button onClick={addToCart} className="add-to-cart-button">Add to Cart</button></Link>
      </div>
</div>
  );
};

interface props {
  title?: string,
  subtitle?: string,
  rating?: string,
  image?: string,
  description?: string,
  price?: number,
};

export default ProductPage;
