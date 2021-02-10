const router = require("express").Router();
const userController = require("../controllers/user");

router
  .get("/", userController.getUser)
  .get("/:id", userController.getUserId)
  .post("/", userController.createUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

module.exports = router;