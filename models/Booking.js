const mongooser = require('mongoose');
const Schema = new mongooser.Schema({
    userId: {
        type: String,
        required: true
    },
    HotelId: {
        type: String,
        required: true,
        unique: true
    },
    BookingDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['confirmed', 'cancelled'],
        default: 'confirmed'
    }
})

const Booking = mongooser.model('Booking', Schema);
module.exports = Booking;