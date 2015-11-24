var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BookingSchema = new Schema({
  local: {
    attraction_id:  { type: Number },
    Date:           { type: Date },
    qnt_adult:      { type: String},
    qnt_child:      { type: String},
    price:          { type: Number}
  }
});


module.exports = mongoose.model('Booking', BookingSchema);