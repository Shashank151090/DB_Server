const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let FriendsSchema = new Schema ({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    contact: {type: Number, required: true},
    dob: {type: String, required: true},
    curentCity: {type: String, required: true},
    hometown: {type: String, required: true},
    // education: {
    //     school: {type: String},
    //     college: {type: String},
    // },
    // work: {
    //     present: {type: String},
    //     past: {type: Array},
    // }
})

module.exports = mongoose.model('Friend', FriendsSchema);