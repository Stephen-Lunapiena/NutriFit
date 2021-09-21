// import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
   <nav >
       <h1>NutriFit</h1>
    <ul className='nav-links' >
        <Link to ='/about' >
        <li>
            About Us
        </li>
        </Link>
        <Link to='/nutriapi'>
        <li>
           Nutrition
        </li>
        </Link>
        <Link to='/fitapi'>
        <li>
           Fitness
        </li>
        </Link>
    </ul>
  </nav>
  );
}

export default Nav;