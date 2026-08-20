import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class ReactSlider extends Component {
  state = {
    offersList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getOffers()
  }

  getOffers = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      'https://apis.ccbp.in/restaurants-list/offers',
      options,
    )
    const data = await response.json()

    const updatedData = data.offers.map(each => ({
      id: each.id,
      imageUrl: each.image_url,
    }))

    this.setState({offersList: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#f7931e" height={50} width={50} />
    </div>
  )

  render() {
    const {offersList, isLoading} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return isLoading ? (
      this.renderLoader()
    ) : (
      <div className="slider-container">
        <Slider {...settings}>
          {offersList.map(offer => (
            <li className="offer-card" key={offer.id}>
              <img src={offer.imageUrl} className="offer-image" alt="offer" />
            </li>
          ))}
        </Slider>
      </div>
    )
  }
}
