import {Link} from 'react-router-dom'
import './index.css'

const EmptyCart = () => (
  <div className="empty-cart-container">
    <img
      src="https://res.cloudinary.com/uqubvvty/image/upload/v1786347301/cooking_1_lusd3u.png"
      alt="empty cart"
      className="empty-cart-image"
    />

    <h1>No Order Yet!</h1>

    <p>Your cart is empty. Add something from the menu.</p>

    <Link to="/" className="oder-now-link">
      <button type="button" className="empty-cart-container-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCart
