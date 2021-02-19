const router = require("express").Router();
const ticketController = require("../controllers/ticket");

router
  .get("/:id", ticketController.getTicket)
  .get("/", ticketController.getAllTickets)
  .post("/", ticketController.addTicket);

module.exports = router;
