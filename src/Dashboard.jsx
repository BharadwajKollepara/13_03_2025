import { Link, Outlet } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Dashboard.css";
import "./CartIcon.css";

const Dashboard = () => {
  const { cart } = useCart();

  return (
    <div className="dashboard-container">
      <Link to="/cart" className="cart-icon">
        🛒
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </Link>

      <nav className="dashboard-nav">
        <Link to="">Laptops</Link>
        <Link to="mobiles">Mobiles</Link>
        <Link to="watches">Watches</Link>
      </nav>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
