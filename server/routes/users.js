const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

const router = express.Router();

//GET ALL users
router.get("/", getAllUsers);

//GET a single user
router.get("/:id", getUser);

//POST a new user
router.post("/", createUser);

//UPDATE a user
router.patch("/:id", updateUser);

//DELETE a user
router.delete("/:id", deleteUser);

module.exports = router;
