import { FaRegHeart } from 'react-icons/fa6';
import './Product.css';

interface ProductCardProps {
  img: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, description, price }) => {
  return (
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
  );
};

export default ProductCard;
