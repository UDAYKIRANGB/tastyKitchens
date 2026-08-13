import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-name-container">
        <img
          src="https://res.cloudinary.com/uqubvvty/image/upload/v1784705539/Frame_275_iv3j1s.png"
          className="footer-website-logo"
          alt="website-footer-logo"
        />
        <h1 className="footer-website-name">Tasty Kitchens</h1>
      </div>
      <p className="footer-discription">
        The only thing we are serious about is food. <br />
        contact us on
      </p>
      <ul className="social-media-icons">
        <FaPinterestSquare size={35} testid="pintrest-social-icon" />
        <FaInstagram size={35} testid="instagram-social-icon" />
        <FaTwitter size={35} testid="twitter-social-icon" />
        <FaFacebookSquare size={35} testid="facebook-social-icon" />
      </ul>
    </div>
  )
}
