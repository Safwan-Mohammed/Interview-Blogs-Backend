const express = require('express')
const router = express.Router()

router.use('/api/auth', require('./auth.route'));
router.use('/api/users', require('./user.route'));
router.use('/api/posts', require('./post.route'));
router.use('/api/comments', require('./comment.route'));

module.exports = router