import { FaRegHeart } from 'react-icons/fa6';
import './Product.css';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  img: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, description, price }) => {
  return (
    <Link to={'/product'} className='link-no-style'>
    <div className="product-card">
      <div className="image-container">
        <img src={img} alt="Product" />
      </div>
      <div className="details-container">
        <p className="description">{description}</p>
        <div className="price-container">
          <span className="price">${price}</span>
          <FaRegHeart/>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
