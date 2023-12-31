import React from 'react';
import './Category.css';

interface CategoryCardProps {
  title: string;
  img: string;
  backgroundColor?: string; // Optional background color prop
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, img, backgroundColor }) => {
  const cardStyle: React.CSSProperties = {
    backgroundImage: `url(${img})`,
    backgroundColor: backgroundColor || '#333', // Default background color is dark gray
     backgroundRepeat: 'no-repeat', // Avoid tiling
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'top left', // Move image to bottom right

  };

  return (
    <div className="category-card" style={cardStyle}>
      <p className="title">{title}</p>
    </div>
  );
};

export default CategoryCard;
