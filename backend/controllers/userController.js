// backend/controllers/userController.js
const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const newUser = new User({ username: req.body.username });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

exports.followUser = async (req, res) => {
  try {
    const { userId, followId } = req.body;
    const user = await User.findById(userId);
    const userToFollow = await User.findById(followId);

    if (user && userToFollow) {
      user.following.push(userToFollow._id);
      userToFollow.followers.push(user._id);

      await user.save();
      await userToFollow.save();
      res.status(200).json({ message: "Followed successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error following user", error });
  }
};
