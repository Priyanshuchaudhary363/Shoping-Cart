import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="font-medium text-white flex justify-between mx-auto items-center h-20 max-w-6xl px-8 overflow-x-hidden">

      <NavLink to="/">
        <img src="./logo.png"  className="md:h-14 h-10" />
      </NavLink>

          <div className="flex items-center font-medium text-slate-100  mr-5 space-x-6">
            <NavLink to="/">
              <p className="hover:scale-110 transition duration-300 ease-in">Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative hover:scale-110 transition duration-300 ease-in">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;

