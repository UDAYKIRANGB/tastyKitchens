import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsFilterLeft} from 'react-icons/bs'

import Navbar from '../Navbar'
import Footer from '../Footer'
import ReactSlider from '../ReactSlider'
import SortDropdown from '../SortDropdown'
import ResturantCard from '../ResturantCard'
import Pagination from '../Pagination'

import './index.css'

const sortByOptions = [
  {
    id: 1,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class Home extends Component {
  state = {
    activeOptionId: 'Lowest', // ← default changed
    resturantsList: [],
    isLoading: true,
    activePage: 1,
  }

  componentDidMount() {
    this.getRestaurants()
  }

  onChangeSortOption = value => {
    this.setState({activeOptionId: value}, this.getRestaurants)
  }

  onClickPrevious = () => {
    this.setState(
      prevState => ({
        activePage: prevState.activePage - 1,
      }),
      this.getRestaurants,
    )
  }

  onClickNext = () => {
    this.setState(
      prevState => ({
        activePage: prevState.activePage + 1,
      }),
      this.getRestaurants,
    )
  }

  getRestaurants = async () => {
    const {activeOptionId, activePage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const offset = (activePage - 1) * 9
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9&sort_by_rating=${activeOptionId}`
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = data.restaurants.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      menuType: each.menu_type,
      rating: each.user_rating.rating,
      reviewCount: each.user_rating.total_reviews,
    }))
    this.setState({
      resturantsList: updatedData,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div className="resturant-loader-container">
      <Loader type="ThreeDots" color="#f7931e" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {resturantsList} = this.state
    return (
      <ul className="resturant-list">
        {resturantsList.map(each => (
          <ResturantCard key={each.id} details={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {activeOptionId, isLoading, activePage} = this.state

    return (
      <>
        <Navbar />
        <ReactSlider />
        <div className="resturant-details-container">
          <div className="heading-filter-details">
            <div>
              <h1 className="popular-resturant-heading">Popular Restaurants</h1>{' '}
              {/* fixed */}
              <p className="popular-resturant-para">
                Select your favourite restaurant special dish and make your day
                happy... {/* fixed */}
              </p>
            </div>
            <div className="filter-container">
              <BsFilterLeft size={35} />
              <SortDropdown
                sortByOptions={sortByOptions}
                activeOptionId={activeOptionId}
                onChangeSortOption={this.onChangeSortOption}
              />
            </div>
          </div>
          {isLoading ? this.renderLoader() : this.renderSuccessView()}
        </div>
        <Pagination
          activePage={activePage}
          totalPages={20}
          onClickPrevious={this.onClickPrevious}
          onClickNext={this.onClickNext}
        />
        <Footer />
      </>
    )
  }
}

export default Home
