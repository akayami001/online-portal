const User = require("../models/userModel.js");
const mongoose = require("mongoose");

//GET ALL users
const getAllUsers = async (req, res) => {
  console.log('deneme')
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

//GET a single user
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No user with this id" });
  }
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "No user with this id" });
  }
  res.status(200).json(user);
};

//create a new user
const createUser = async (req, res) => {
  const { name, email, password, className, isAdmin, isTeacher } = req.body;

  //add user to db
  try {
    const user = await User.create({
      name,
      email,
      password,
      className,
      isAdmin,
      isTeacher,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No user with this id" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({ error: "No user with this id" });
  }
  res.status(200).json(user);
};

//DELETE a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No user with this id" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "No user with this id" });
  }
  res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
