import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {FaRupeeSign} from 'react-icons/fa'

import Navbar from '../Navbar'
import CartItem from '../CartItem'
import Footer from '../Footer'
import EmptyCart from '../EmptyCart'

import './index.css'

const Cart = () => {
  const [cartData, setCartData] = useState(() => {
    const data = localStorage.getItem('cartData')
    return data ? JSON.parse(data) : []
  })

  const updateCart = updatedCart => {
    setCartData(updatedCart)
    localStorage.setItem('cartData', JSON.stringify(updatedCart))
  }

  const history = useHistory()

  const onClickPlaceOrder = () => {
    history.push('/payment-success')
  }

  return (
    <>
      <Navbar />
      {cartData.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="cart-container">
            <div className="category-container">
              <p className="category">Item</p>
              <p className="category">Quantity</p>
              <p className="category">Price</p>
            </div>
            <ul className="cart-list">
              {cartData.map(eachItem => (
                <CartItem
                  key={eachItem.id}
                  details={eachItem}
                  updateCart={updateCart}
                />
              ))}
            </ul>
            <hr className="line" />
            <div className="total-amount-container">
              <h1 className="order-total-heading">Order Total:</h1>
              <p className="total-price" testid="total-price">
                <FaRupeeSign />
                {cartData.reduce(
                  (total, eachItem) =>
                    total + eachItem.cost * eachItem.quantity,
                  0,
                )}
              </p>
            </div>
            <button
              type="button"
              className="place-order-btn"
              onClick={onClickPlaceOrder}
            >
              Place Order
            </button>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default Cart
