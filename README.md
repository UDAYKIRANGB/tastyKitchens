# Tasty Kitchens

Tasty Kitchens is a responsive food ordering web application built using React.js. Users can log in, browse restaurants, sort and paginate restaurant listings, view restaurant details and food items, add items to their cart, manage quantities, and complete the ordering flow.

## Live Demo

[Visit Tasty Kitchens](https://udayresto.ccbp.tech)

## Features

- User authentication with protected routes
- Restaurant listing with REST API integration
- Sort restaurants by highest and lowest rating
- Pagination for restaurant listings
- Restaurant details and food items
- Add food items to cart
- Increase and decrease food quantity
- Remove items from cart
- Cart total calculation
- Empty cart view
- Payment success page
- Page not found handling
- Loading and failure states
- Responsive design for mobile, tablet, and desktop devices

## Authentication

The application uses authentication to protect private routes.

After successful login, the authentication token is stored using cookies. Protected routes check the authentication status before allowing users to access the application.

## Restaurant Listing

The Home page displays a list of popular restaurants fetched from the API.

Each restaurant card displays:

- Restaurant image
- Restaurant name
- Food type
- Rating
- Number of ratings

Users can click on a restaurant to view its details.

## Sorting

Restaurants can be sorted based on their ratings.

Available options:

- Highest
- Lowest

The selected sorting option is passed to the API and the restaurant list is updated accordingly.

## Pagination

The application supports pagination for the restaurant list.

Users can:

- Move to the next page
- Move to the previous page
- View the current active page

## Restaurant Details

The Restaurant Details page displays information about the selected restaurant and the food items available in it.

Users can select food items and add them to the cart.

## Cart

The Cart page displays the food items selected by the user.

Users can:

- Increase or decrease item quantity
- Remove items
- View the total order amount
- Place the order

## Payment Success

After placing an order successfully, the user is redirected to the Payment Success page.

The page displays an order confirmation and provides an option to return to the Home page.

## Responsive Design

The application is designed to provide a good user experience across desktop, tablet, and mobile screen sizes.

## Tech Stack

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- React Icons
- REST APIs
- Cookies
- Local Storage
- Git
- GitHub

## Application Flow

Login → Home → Restaurant List → Restaurant Details → Add Food → Cart → Place Order → Payment Success

## API Integration

The application uses REST APIs to fetch restaurant and food information. Restaurant listings support pagination using `offset` and `limit` and sorting based on ratings.

## Cart Functionality

Cart data is stored in browser local storage and managed using React state. Users can add food items, increase or decrease quantities, remove items, view the total amount, and place an order.

## Project Structure

src/
├── components/
│   ├── Cart/
│   ├── CartItem/
│   ├── EmptyCart/
│   ├── Footer/
│   ├── Home/
│   ├── LoginPage/
│   ├── Navbar/
│   ├── PageNotFound/
│   ├── Pagination/
│   ├── PaymentSuccess/
│   ├── ProtectedRoute/
│   ├── RestaurantCard/
│   ├── RestaurantDetails/
│   ├── RestaurantDetailsCard/
│   └── SortDropdown/
├── App.js
├── App.css
└── index.js

## Installation

git clone https://github.com/UDAYKIRANGB/tastyKitchens.git

cd tastyKitchens

npm install

npm start

## Learning Outcomes

This project provided practical experience in React.js, reusable components, state management, API integration, authentication, cookies, protected routes, React Router, sorting, pagination, local storage, cart management, responsive design, and handling loading, failure, empty, and not-found states.


## Author

**Uday Kiran G B**

GitHub: https://github.com/UDAYKIRANGB
