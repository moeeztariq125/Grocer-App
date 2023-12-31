import { useState, ReactNode  } from 'react';
import { NavbarConstants } from '../../constants';
import './Navbar.css';

interface NavbarProps {
  children: ReactNode;
}

const Navbar:React.FC<NavbarProps> = ({children}) => {
  const [current, setCurrent] = useState('HOME');

  
  return (
    <>
    <ul>
      {NavbarConstants.map((item, index) => {
        return (
          <li key={index}  className={item.highLighted==true?'highlighted':''}>
            {item.img}
          </li>
        );
      })}
    </ul>
    {children}
    </>
  );
};

export default Navbar;
