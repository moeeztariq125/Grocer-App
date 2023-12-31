import { FaHouse, FaRegHeart  } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { PiTrendUpThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";


export default [
    {
        ENUM:'/',
        img: <FaHouse/>,
        highLighted:false
    },
    {
        ENUM:'/',
        img:<FaRegHeart/>,
        highLighted:false
    },
    {
        ENUM:'/bucket',
        img:<CiShoppingBasket/>,
        highLighted:true
    },
    {
        ENUM:'/',
        img:<PiTrendUpThin/>,
        highLighted:false
    },
    {
        ENUM:'/',
        img:<CgProfile/>,
        highLighted:false
    }
]