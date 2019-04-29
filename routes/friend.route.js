const express = require('express');
const router = express.Router();

const friend_controller = require('../controllers/friend.controller.js');

router.get('/test', friend_controller.test);
router.post('/create', friend_controller.user_create);
router.get('/getList', friend_controller.get_friends);
router.get('/:id', friend_controller.user_details);
router.put('/:id/update', friend_controller.user_update);
router.delete('/:id/delete', friend_controller.user_delete);


module.exports = router;
