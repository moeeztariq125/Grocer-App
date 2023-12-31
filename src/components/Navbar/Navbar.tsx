import { NavbarConstants, NavbarPaths } from '../../constants';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
          <Link to={item.ENUM} className='link-no-style'>
          <li key={index}  className={item.highLighted==true?'highlighted':''}>
            {item.img}
          </li>
          </Link>
        );
      })}
    </ul>
    {/* {children} */}
    </>
  );
};

export default Navbar;
