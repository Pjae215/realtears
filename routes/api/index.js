const path = require("path");
const router = require("express").Router();
const recordsRoutes = require("./records");


// Book routes
router.use("/records", recordsRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;