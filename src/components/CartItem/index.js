import {FaRupeeSign} from 'react-icons/fa'

import './index.css'

const CartItem = props => {
  const {details, updateCart} = props
  const {id, name, imageUrl, cost, quantity} = details

  const onDecrease = () => {
    if (quantity === 1) {
      const cartData = JSON.parse(localStorage.getItem('cartData')) || []

      const updatedCart = cartData.filter(eachItem => eachItem.id !== id)

      updateCart(updatedCart)
    } else {
      const cartData = JSON.parse(localStorage.getItem('cartData')) || []

      const updatedCart = cartData.map(eachItem => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            quantity: eachItem.quantity - 1,
          }
        }

        return eachItem
      })

      updateCart(updatedCart)
    }
  }

  const onIncrease = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || []

    const updatedCart = cartData.map(eachItem => {
      if (eachItem.id === id) {
        return {
          ...eachItem,
          quantity: eachItem.quantity + 1,
        }
      }

      return eachItem
    })

    updateCart(updatedCart)
  }

  return (
    <li className="Cart-list-item-container">
      <img src={imageUrl} alt="cart-item-image" className="cart-item-img" />
      <div className="cart-item-details">
        <h1 className="cart-item-heading">{name}</h1>
        <div className="cart-count-container">
          <button
            type="button"
            className="cart-decrement-btn"
            onClick={onDecrease}
          >
            -
          </button>

          <p className="cart-count">{quantity}</p>

          <button
            type="button"
            className="cart-increment-btn"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
        <p className="cart-item-price">
          <FaRupeeSign />
          <span>{cost}</span>
        </p>
      </div>
    </li>
  )
}

export default CartItem
