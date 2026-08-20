import {Link} from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/fa'
import Navbar from '../Navbar'

import './index.css'

const PaymentSuccess = () => (
  <>
    <Navbar />
    <div className="payment-success-container">
      <div className="payment-success-card">
        <FaCheckCircle className="success-icon" />

        <h1>Payment Successful</h1>

        <p>Thank you for ordering Your payment is successfully completed.</p>

        <Link to="/" className="payment-link">
          <button type="button">Go to Home Page</button>
        </Link>
      </div>
    </div>
  </>
)

export default PaymentSuccess
