import {Link} from 'react-router-dom'
import './index.css'

const PageNotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/uqubvvty/image/upload/v1786350496/erroring_1_xofxrd.png"
      alt="not found"
      className="not-found-image"
    />

    <h1>Page Not Found</h1>

    <p>We are sorry, the page you requested could not be found.</p>

    <p>Please go back to the homepage</p>

    <Link to="/" className="link-comp">
      <button type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default PageNotFound
