import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './index.css'

const ResturantCard = props => {
  const {details} = props
  const {id, name, imageUrl, menuType, rating, reviewCount} = details

  return (
    <li className="resturant-card-container" testid="restaurant-item">
      <Link to={`/restaurant/${id}`} className="link-item">
        <img src={imageUrl} className="resturant-img" alt="restaurant" />
        <div className="restaurant-details">
          <h1 className="restaurant-heading">{name}</h1>
          <p className="restaurant-para">{menuType}</p>
          <div className="rating-details-container">
            <div className="rating-icon-container">
              <FaStar className="rating-icon" />
              <p className="rating">{rating}</p>
            </div>
            <p className="total-rating">({reviewCount} ratings)</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ResturantCard
