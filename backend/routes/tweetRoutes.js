// backend/routes/tweetRoutes.js
const express = require("express");
const tweetController = require("../controllers/tweetController");
const router = express.Router();

router.post("/tweets", tweetController.createTweet);
router.get("/tweets", tweetController.getTweets);

module.exports = router;
