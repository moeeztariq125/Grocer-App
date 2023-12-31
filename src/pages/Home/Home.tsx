import Category from '../../components/Category/Category';
import ProductCard from '../../components/Product/Product';
import './Home.css'
import { FaSearch } from "react-icons/fa";

const Home = () => {

  return (
    <>
    <header>
      <div>
      <div className='h2'>Hey Danyal 👋</div>
      <p className='p'>It's dinner time!</p>
      </div>
      <FaSearch className='h2 hover'/>
    </header>
    <section className='Categories'>
      <div className='category__header'>
        <h3 className='h3'>Categories</h3>
        <h3 className='h3 colored'>See all</h3>
      </div>
      <div className='category__items'>
        <Category title='Salad' img='/Salad.png' backgroundColor='#EAF9E6'/>
        <Category title='Steak' img='/Meat.png' backgroundColor='#FFE8EE'/>
        <Category title='Chicken' img='/Chicken.png' backgroundColor='#FFEEE8'/>
      </div>
    </section>
    <section className='Recommended'>
      <div className='recommended__header'>
        <h3 className='h3'>Recommended Items</h3>
        <h3 className='h3 colored'>Filter</h3>
      </div>
      <div className='Recommended__items'>
        <ProductCard img='/Mashed.png' description='Green salad with mashed potatots' price={12.22}/>
        <ProductCard img='/Veggies.png' description='Fresh vegetable salad' price={11.22}/>
        <ProductCard img='/Salad2.png' description='Chicken Salad' price={11.22}/>
        <ProductCard img='/Eggs.png' description='Eggs Benedict' price={11.22}/>
      </div>
    </section>
    <footer></footer>
    </>
  )
}

export default Home