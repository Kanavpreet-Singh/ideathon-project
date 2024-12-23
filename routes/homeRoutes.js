const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home.ejs");
});

router.get("/aboutUs", (req, res) => {
    res.render("aboutus.ejs");
});

router.get("/services", (req, res) => {
    res.render("services.ejs");
});

module.exports = router;
