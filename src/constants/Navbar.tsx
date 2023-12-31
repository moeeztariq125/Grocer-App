import { FaHouse, FaRegHeart  } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { PiTrendUpThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";


export default [
    {
        ENUM:'HOME',
        img: <FaHouse/>,
        highLighted:false
    },
    {
        ENUM:'LIKES',
        img:<FaRegHeart/>,
        highLighted:false
    },
    {
        ENUM:'CART',
        img:<CiShoppingBasket/>,
        highLighted:true
    },
    {
        ENUM:'TRENDS',
        img:<PiTrendUpThin/>,
        highLighted:false
    },
    {
        ENUM:'PROFILE',
        img:<CgProfile/>,
        highLighted:false
    }
]