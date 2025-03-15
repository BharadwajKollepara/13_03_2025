import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./CartContext";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import "./CartIcon.css";

const ProductDetails = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:9000/${type}`).then((res) => {
      const item = res.data.find((prod) => prod.id === parseInt(id));
      setProduct(item);
    });
  }, [type, id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      {/* Cart Icon at Top Right */}
      <Link to="/cart" className="cart-icon">
        🛒 ({cart.length})
      </Link>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={product.pimage} alt={product.pname} />
      <h2>
        <i className="fa fa-rupee"></i> {product.pcost}
      </h2>
      <div className="quantity-controls">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          -
        </button>
        <span> {quantity} </span>
        <button
          onClick={() => setQuantity(Math.min(product.pqty, quantity + 1))}
        >
          +
        </button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
