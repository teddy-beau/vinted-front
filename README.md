# Vinted Clone - Frontend

<div align="center"><p>This project is based on Vinted, an online marketplace for secondhand clothing.</p>
<img src="https://github.com/teddy-beau/vinted-front/blob/main/src/assets/images/vinted-logo.png?raw=true" alt="Vinted logo" width="170" /></div>

Live site (Netlify deploy): https://vinted-teddy.netlify.app/

Backend repository: https://github.com/teddy-beau/vinted-back

<div align="center"><img src="./_preview/vinted-login-buy.gif" alt="Gif login and purchase" width="600" style="box-shadow: 2px 2px 8px lightgrey"/></div>

## Stack & Features

### Packages used

-  Fontawesome (icons)
-  Material UI (sorting switch asc/desc)
-  Stripe (payment)
-  Axios (HTTP requests)
-  JS Cookie (cookie management)
-  React Router Dom (navigation)
-  React Dropzone (drag and drop for file upload)
-  React Multi Carousel (carousel for offer pictures)
-  React Range (to sort offers by proce range)
-  Node Sass (scss)

### Main features

#### Header

-  Search bar: look through the database for offer title matching the input
-  Login and sign up button: open a modal (when the user is logged in the login button turns into a logout button)

#### Home

-  Price switch: sort offers by ascending or descending price
-  Price slider: filter offers that match the selected range
-  Offer list: display the offers matching the filters (by default price are ascending and 25 result are displayed per page)
-  Page navigation (bottom of the page): navigate through pages and define how many offers are displayed per page

#### Sign up

-  Email, username and password are required.
-  Upon submission a cookie with a user token is created. It will be deleted on logout.

#### Login

-  Email and password are required.
-  Upon submission a cookie with a user token is created. It will be deleted on logout.

#### Log out

-  Upon submission the cookie with the user token is deleted.

#### Publish page

-  User must be logged in to access the publishing form
-  Dropzone for file upload (at the moment only single file upload is supported). The dropzone offers picture preview and a button to remove the selected file.
-  Required fields: picture, title, description, price.
-  Upon submission the user is redirected to the page of the offer.

#### Offer page

-  The page displays the offer details.
-  If the offer has several pictures those will be displayed in a carousel.
-  Upon clicking the "purchase" button the user will be redirected to the checkout page if logged in. Otherwise the user will be redirected to the login page.

#### Checkout page

-  Display the offer title, price, additional fees (insurance and delivery) as well as the total.
-  Payment is powered by Stripe and is functional. To test the payment use the following card details : card number = 4242 4242 4242 4242, exp. date = 04/24, CVC = 242, zip = 42424
-  Upon clicking the payment button a confirmation message is displayed.

## Screenshots

**Homepage:**

<img  src="./_preview/vinted-home.png" alt="Screenshot Vinted Homepage" style="box-shadow: 2px 2px 8px lightgrey; margin-bottom: 20px"/>

**Signup form:**

<img  src="./_preview/vinted-signup.png" alt="Screenshot Vinted Sign up" style="box-shadow: 2px 2px 8px lightgrey; margin-bottom: 20px"/>

**Offer page:**

<img  src="./_preview/vinted-offer.png" alt="Screenshot Vinted Offer" style="box-shadow: 2px 2px 8px lightgrey; margin-bottom: 20px"/>

## Setup Instructions

Clone this repository :

```
git clone https://github.com/teddy-beau/vinted-front.git
```

Install dependencies with yarn:

```
yarn install
```

Once the installation is complete, run it:

```
yarn start
```

## Status & Backlog
