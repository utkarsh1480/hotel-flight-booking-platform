# hotel-flight-booking-platform
A MERN stack travel booking platform with authentication, trip listings, booking management, and payment integration. Designed with scalable backend and responsive UI.

```
travel-app/
│
├── config/
│   ├── db.js
│   ├── auth.js
│
├── controllers/
│   ├── authController.js
│   ├── bookingController.js
│   ├── hotelController.js
│   ├── searchController.js
│
├── models/
│   ├── User.js
│   ├── Hotel.js
│   ├── Booking.js
│   ├── Payment.js
│
├── routes/
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   ├── hotelRoutes.js
│
├── services/
│   ├── paymentService.js
│   ├── searchService.js
│   ├── mailService.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│
├── views/              ← EJS UI
│   ├── layouts/
│   ├── partials/
│   ├── home.ejs
│   ├── login.ejs
│   ├── search.ejs
│   ├── booking.ejs
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│
├── app.js
└── package.json
```
