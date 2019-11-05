const router = require("express").Router();
const appController = require("../../controllers/appController.js");

// Matches with "/api/apps"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);


// Matches with "/api/books/:email"
router
  .route("/:id")
  .get(appController.findById)
  .put(appController.update)
  .delete(appController.remove);

module.exports = router;
