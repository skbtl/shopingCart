import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Logo from "../assets/logo.png";
import "./Header.css";
export const Header = () => {
  const { cartList } = useCart();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shoping Cart Logo" />
        <span>My Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home Page
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart Page
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:{cartList.length}</span>
      </Link>
    </header>
  );
};
