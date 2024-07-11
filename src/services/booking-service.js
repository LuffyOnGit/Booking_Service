const {BookingRepository} = require('../repository/index');
const axios = require('axios');
const { FLIGHT_SERVICE_PATH} = require('../config/serverConfig');
const { ServiceError } = require('../utils/errors');

class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository();
    } 

    async createBooking(data){
        try {
            const flightId = data.flightId;
            let getFlightRequestUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const flight = await axios.get(getFlightRequestUrl);
            console.log(flight.data.data);
            return flight.data.data;
        } catch (error) {
            throw new ServiceError();
        }
    }
}

module.exports = BookingService;