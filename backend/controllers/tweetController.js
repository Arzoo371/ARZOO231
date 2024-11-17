// backend/controllers/tweetController.js
const Tweet = require("../models/Tweet");

exports.createTweet = async (req, res) => {
  try {
    const newTweet = new Tweet({
      content: req.body.content,
      user: req.body.userId,
    });
    const tweet = await newTweet.save();
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).json({ message: "Error creating tweet", error });
  }
};

exports.getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find().populate("user", "username").sort({ createdAt: -1 });
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tweets", error });
  }
};
