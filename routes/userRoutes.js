const express = require("express");
const router = express.Router();
const {User}=require("../models/e-gov")
const{handleUserSignup, handleUserLogin,handleOfficialSignup,handleOfficialLogin}=require("../controllers/userQueries")

router.get("/choosel", (req, res) => {
    res.render("choosePostLogin.ejs");
});
router.get("/chooses", (req, res) => {
    res.render("choosePostSignup.ejs");
});
router.get("/signup", (req, res) => {
    res.render("signup.ejs");
});
router.post("/signup",handleUserSignup)
router.post("/login",handleUserLogin)

router.get("/login", (req, res) => {
    res.render("login.ejs");
});

//gov officials
router.get("/loginOfficial", (req, res) => {
    res.render("loginOfficial.ejs");
})

router.get("/signupOfficial", (req, res) => {
    res.render("signupOfficial.ejs");
})


router.post("/signupOfficial",handleOfficialSignup)
router.post("/loginOfficial",handleOfficialLogin)

module.exports = router;
