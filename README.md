# ✈️ Hotel & Flight Booking Platform

A full-stack travel booking application built using **Node.js, Express, EJS, and MongoDB**.
Users can search hotels and flights, view details, make bookings, and complete payments.
Admins can manage listings, bookings, and platform data.

---

## 🚀 Tech Stack

### Frontend

* EJS (Server-side rendering)
* Bootstrap / Tailwind CSS
* Vanilla JavaScript

### Backend

* Node.js
* Express.js (MVC architecture)

### Database

* MongoDB
* Mongoose ORM

### Integrations

* Razorpay / Stripe (Payments)
* Cloudinary (Image storage)
* Nodemailer (Email notifications)
* External Travel APIs (Flights / Hotels)

---

## 🧭 Architecture Overview

This application follows **MVC (Model-View-Controller)** architecture for scalability and maintainability.

```
Browser (Client)
      ↓
Express Server
      ↓
Routes
      ↓
Controllers
      ↓
Services (Business Logic)
      ↓
Database (MongoDB)
      ↓
External APIs (Flights / Payments / Maps)
```

**Explanation:**

* Routes handle request endpoints.
* Controllers manage incoming requests.
* Services contain business logic.
* Models interact with the database.
* Views (EJS) render UI.

---

## 📁 Project Structure

```
hotel-flight-booking-platform/
│
├── config/
│   ├── db.js
│   ├── auth.js
│
├── controllers/
│   ├── authController.js
│   ├── bookingController.js
│   ├── hotelController.js
│   ├── flightController.js
│
├── models/
│   ├── User.js
│   ├── Hotel.js
│   ├── Flight.js
│   ├── Booking.js
│   ├── Payment.js
│
├── routes/
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── hotelRoutes.js
│   ├── flightRoutes.js
│
├── services/
│   ├── paymentService.js
│   ├── searchService.js
│   ├── emailService.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│
├── views/
│   ├── layouts/
│   ├── partials/
│   ├── home.ejs
│   ├── login.ejs
│   ├── search.ejs
│   ├── hotel-details.ejs
│   ├── flight-details.ejs
│   ├── booking.ejs
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│
├── app.js
├── package.json
└── README.md
```

---

## ✨ Features

### 👤 User

* Register & Login
* Search Hotels & Flights
* View details
* Book hotels/flights
* Online payment
* Booking history
* Profile management

### 🛠 Admin

* Add hotels/flights
* Manage bookings
* View analytics dashboard

---

## 🗄 Database Schema

### User

* name
* email
* password
* role (user/admin)

### Hotel

* name
* location
* price
* rating
* images
* roomsAvailable

### Flight

* airline
* departure
* arrival
* timing
* price
* seatsAvailable

### Booking

* userId
* hotelId / flightId
* bookingDate
* paymentStatus

### Payment

* bookingId
* amount
* paymentMethod
* status

---

## 🔐 Authentication Flow

```
User Login/Register
      ↓
Password hashed (bcrypt)
      ↓
Session / JWT generated
      ↓
Stored in cookies
      ↓
Protected routes access
```

---

## 🔎 Search Flow

```
User searches hotels/flights
      ↓
Search Controller
      ↓
Search Service
      ↓
Database / External Travel API
      ↓
Render results (EJS)
```

---

## 💳 Payment Flow

```
Booking initiated
      ↓
Order created
      ↓
Razorpay/Stripe checkout
      ↓
Webhook verification
      ↓
Booking confirmed
```

---

## 🧠 Architecture Decisions

* MVC used for scalability and maintainability
* MongoDB chosen for flexible travel data schema
* EJS for server-side rendering and SEO
* Razorpay/Stripe for secure payment integration
* Cloudinary for efficient image storage
* Future scope: Redis caching + Microservices

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/hotel-flight-booking-platform.git
cd hotel-flight-booking-platform
npm install
npm start
```

Server runs on:

```
http://localhost:3000
```

---

## 📸 Screenshots

(Add after UI completion)

* Home Page
* Search Page
* Hotel Details
* Flight Details
* Booking Page
* Admin Dashboard

---

## 🌍 Deployment (Planned)

* Backend: Render / Railway / AWS EC2
* Database: MongoDB Atlas
* Media: Cloudinary
* Reverse Proxy: Nginx

---

## 🔮 Future Enhancements

* Google OAuth login
* AI travel recommendations
* Price prediction system
* Real-time seat availability
* Notification system (Email/SMS)
* Microservices architecture

---

## 👨‍💻 Author

**Utkarsh**
Full Stack Developer | Node.js | Backend Focused
