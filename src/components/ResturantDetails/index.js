import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaStar, FaRupeeSign} from 'react-icons/fa'

import Navbar from '../Navbar'
import ResturantDetailsCard from '../ResturantDetailsCard'
import Footer from '../Footer'
import './index.css'

class ResturantDetails extends Component {
  state = {
    resturantDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const {match} = this.props
    const {id} = match.params

    const url = `https://apis.ccbp.in/restaurants-list/${id}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = item => ({
      id: item.id,
      name: item.name,
      rating: item.rating,
      costForTwo: item.cost_for_two,
      cuisine: item.cuisine,
      imageUrl: item.image_url,
      reviewsCount: item.reviews_count,
      opensAt: item.opens_at,
      location: item.location,
      foodItems: item.food_items.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        cost: eachItem.cost,
        foodType: eachItem.food_type,
        imageUrl: eachItem.image_url,
        rating: eachItem.rating,
      })),
    })

    const formatedData = updatedData(data)

    this.setState({
      resturantDetails: formatedData,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div className="resturant-details-loader-container">
      <Loader type="ThreeDots" color="#f7931e" height={50} width={50} />
    </div>
  )

  renderSuccesView = () => {
    const {resturantDetails} = this.state
    const {
      name,
      imageUrl,
      costForTwo,
      location,
      cuisine,
      rating,
      reviewsCount,
    } = resturantDetails
    return (
      <>
        <div className="reasturant-details-contianer">
          <img src={imageUrl} className="reasturant-details-image" alt={name} />
          <div className="resturant-details-card">
            <h1 className="resturant-name">{name}</h1>
            <p className="resturant-category">{cuisine}</p>
            <p className="resturant-location">{location}</p>
            <div className="rating-cost-container">
              <div>
                <div className="rating-container">
                  <FaStar />
                  <p className="rating-cost">{rating}</p>
                </div>
                <p className="rating-count">{reviewsCount}</p>
              </div>
              <div className="vertical-line" />
              <div>
                <div className="price-container">
                  <FaRupeeSign />
                  <p className="rating-cost">{costForTwo}</p>
                </div>
                <p className="price">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="resturant-details-list">
          {resturantDetails.foodItems?.map(eachItem => (
            <ResturantDetailsCard key={eachItem.id} details={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        <Navbar />
        {isLoading ? this.renderLoader() : this.renderSuccesView()}
        <Footer />
      </>
    )
  }
}

export default ResturantDetails
