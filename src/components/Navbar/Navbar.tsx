import { useState, ReactNode  } from 'react';
import { NavbarConstants, NavbarPaths } from '../../constants';
import './Navbar.css';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const [current, setCurrent] = useState('HOME');
  const location = useLocation()
  console.log(location.pathname)
  if(NavbarPaths.includes(location.pathname.split('/')[1])) {
    return null
  }
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
    {/* {children} */}
    </>
  );
};

export default Navbar;
