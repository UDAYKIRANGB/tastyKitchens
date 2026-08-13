import {useState} from 'react'
import {FaStar, FaRupeeSign} from 'react-icons/fa'
import './index.css'

const ResturantDetailsCard = props => {
  const {details} = props
  const {id, name, cost, rating, imageUrl} = details
  const [count, setCount] = useState(0)

  const onAdd = () => {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || []

    const existingItem = cartData.find(eachItem => eachItem.id === id)

    let updatedCartData

    if (existingItem) {
      updatedCartData = cartData.map(eachItem => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            quantity: eachItem.quantity + 1,
          }
        }

        return eachItem
      })
    } else {
      const newItem = {
        cost,
        quantity: 1,
        id,
        imageUrl,
        name,
      }

      updatedCartData = [...cartData, newItem]
    }

    localStorage.setItem('cartData', JSON.stringify(updatedCartData))
    setCount(1)
  }

  const onIncrease = () => {
    setCount(prev => prev + 1)

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

    localStorage.setItem('cartData', JSON.stringify(updatedCart))
  }

  const onDecrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1)

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

      localStorage.setItem('cartData', JSON.stringify(updatedCart))
    }
  }

  return (
    <li className="resturant-details-card-container" testid="foodItem">
      <img src={imageUrl} className="resturant-item-img" alt={name} />
      <div className="restaurant-item-details">
        <h1 className="restaurant-item-name">{name}</h1>
        <p className="restaurant-item-price">
          <FaRupeeSign />
          <span>{cost}</span>
        </p>
        <p className="rating-count-container">
          <FaStar className="restaurant-details-rating-icon" />
          <span className="restaurant-details-rating">{rating}</span>
        </p>
        {count === 0 ? (
          <button type="button" className="add-btn" onClick={onAdd}>
            ADD
          </button>
        ) : (
          <div className="count-container">
            <button
              type="button"
              className="decrement-btn"
              testid="decrement-count"
              onClick={onDecrease}
            >
              -
            </button>

            <p className="count" testid="active-count">
              {count}
            </p>

            <button
              type="button"
              className="increment-btn"
              testid="increment-count"
              onClick={onIncrease}
            >
              +
            </button>
          </div>
        )}
      </div>
    </li>
  )
}

export default ResturantDetailsCard
