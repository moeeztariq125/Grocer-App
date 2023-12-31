// BucketPage.tsx

import { FaArrowLeft } from 'react-icons/fa6';
import './Bucket.css'

interface Card {
  id: number;
  title: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

interface BucketPageProps {
  title: string;
  // Use Card[] to represent an array of cards
  cards: Card[];
  totalPrice: number;
}

const BucketPage= () => {
  // Dummy data
  const totalPrice=100 
  const cards: Card[] = [
    {
      id: 1,
      title: 'Green salad with mashed potatots',
      quantity: 2,
      price: 24.44,
      imageUrl: '/Mashed.png', // Example image URL
    },
    {
      id: 2,
      title: 'Fresh vegetable salad',
      quantity: 1,
      price: 11.22,
      imageUrl: '/Veggies.png', // Example image URL
    },
    {
      id: 3,
      title: 'Mixed salad with strawberries and watermelon',
      quantity: 1,
      price: 12.44,
      imageUrl: '/watermelon.png', // Example image URL
    },
    {
      id: 4,
      title: 'Grilled beef steak with mushroom sauce',
      quantity: 3,
      price: 75.81,
      imageUrl: '/meat3.png', // Example image URL
    },
    {
      id: 5,
      title: 'Vegan strawberry cake',
      quantity: 1,
      price: 10.12,
      imageUrl: '/cake.png', // Example image URL
    }
    // Add more dummy data as needed
  ];

  // Use the provided cards prop if available, otherwise, use the dummy data
  const cardList =cards;

  return (
    <div className="bucket-page">
        <div className='header h2 bold'>
          <FaArrowLeft className = 'hover'/>
          <div>My Bucket</div>
        </div>

      <div className="card-list">
        {cardList.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <div className="card-details">
              <div className='p bold'>{card.title}</div>
              <div className='card-quantity-price'>
              <p className='p font-color-secondary'>Quantity: {card.quantity}</p>
              <p className='bold'><span className='highlight '>$ </span>{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="total-price"><span className='h3'>Total</span> <span className='h2-2'>{totalPrice}<span className='highlight'> $</span></span></div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default BucketPage;
