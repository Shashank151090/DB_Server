const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let FriendsSchema = new Schema ({
    first_name: {type: String},
    last_name: {type: String},
    contact: {type: String},
    dob: {type: String},
    currentCity: {type: String},
    hometown: {type: String},
    education: {
        school: {type: String},
        college: {type: String},
    },
    work: {
        present: {type: String},
        past: {type: Array},
    }
})

module.exports = mongoose.model('Friend', FriendsSchema);
