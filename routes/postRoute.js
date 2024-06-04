var express = require('express');
var router = express.Router();

const {createPost,displayPosts} = require('../controllers/postController');

router.get('/createPost',createPost);
router.get('/showPosts',displayPosts);

module.exports = router;
