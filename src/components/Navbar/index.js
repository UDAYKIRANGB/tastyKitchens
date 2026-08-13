import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdCloseCircle} from 'react-icons/io'

import './index.css'

const Navbar = () => {
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="navigation-container">
      <div className="navbar-container">
        <div className="logo-name-container">
          <Link to="/" className="logo-link">
            <img
              src="https://res.cloudinary.com/uqubvvty/image/upload/v1784633887/Frame_274_dyueiu.png"
              className="navbar-website-logo"
              alt="website logo"
            />
          </Link>
          <h1 className="navbar-website-name">Tasty Kitchens</h1>
        </div>
        <GiHamburgerMenu
          size={30}
          className="hamburgur-icon"
          onClick={() => setShowMenu(true)}
        />
        <ul className="menu-details ">
          <ul className="menu-details-list">
            <Link to="/" className="link-component">
              <li className="list-element">Home</li>
            </Link>
            <Link to="/cart" className="link-component">
              <li className="list-element">Cart</li>
            </Link>
            <li>
              <button
                type="button"
                className="logout-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </ul>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <ul className="menu-details-list">
            <Link to="/" className="link-component">
              <li className="list-element">Home</li>
            </Link>
            <Link to="/cart" className="link-component">
              <li className="list-element">Cart</li>
            </Link>
            <li>
              <button
                type="button"
                className="logout-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
          <button
            type="button"
            className="close-btn"
            onClick={() => setShowMenu(false)}
          >
            <IoMdCloseCircle size={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
