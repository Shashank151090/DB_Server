const Friend = require('../models/friend.model');

exports.test = function(req, res) {
    res.send('Friend API working fine');
}

exports.user_create = function (req, res) {
    let friend = new Friend(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            contact: req.body.contact
        }
    );

    friend.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send("Friend's data saved successfully")
    })
};

exports.user_details = function (req, res) {
    Friend.findById(req.params.id, function (err, data) {
        if (err) {
          console.log(err);
        }
        res.send(data);
    })
};

exports.get_friends = function (req, res) {
    Friend.find(function (err, data){
      if (err) {
        console.log(err);
      }
      res.send(data);
    })
};

exports.user_update = function (req, res) {
    Friend.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, data) {
        if (err) {console.log(err)};
        res.send(data);
    });
};

exports.user_delete = function (req, res) {
    Friend.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('User Deleted successfully!');
    })
};
