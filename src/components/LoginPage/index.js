import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    isErrorMsg: false,
    errorMsg: '',
  }

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.setState({isErrorMsg: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {errorMsg, isErrorMsg} = this.state

    return (
      <div className="login-page">
        <img
          src="https://res.cloudinary.com/uqubvvty/image/upload/v1784696055/login-mobile-img_fspgwh.png"
          alt="website login"
          className="login-mobile-image"
        />
        <div className="form-container">
          <form className="form-element" onSubmit={this.onSubmitForm}>
            <img
              src="https://res.cloudinary.com/uqubvvty/image/upload/v1784633887/Frame_274_dyueiu.png"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="website-name">Tasty Kitchens</h1>
            <h1 className="login-title">Login</h1>
            <div className="label-input-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                className="input"
                id="username"
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="label-input-container">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                className="input"
                id="password"
                onChange={this.onChangePassword}
              />
            </div>
            {isErrorMsg && <p className="error-msg">{errorMsg}</p>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/uqubvvty/image/upload/v1784623526/Rectangle_1456_ee3ovy.png"
          alt="website login 1"
          className="login-img"
        />
      </div>
    )
  }
}

export default LoginPage
