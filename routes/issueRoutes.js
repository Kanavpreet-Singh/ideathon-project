const express = require("express");
const router = express.Router();
const {Issue} = require("../models/e-gov");
const {handleGiveIssuesByState,handlePostNewIssue,handleUpvoteAnIssue}=require("../controllers/someIssueQueries")
router.get("/issues", async (req, res) => {
    const issues = await Issue.find().sort({ upvote: -1 });
    res.render("issues.ejs", { issues });
});


router.get("/issues1", (req, res) => {
    res.render("selectstate.ejs");
});

router.get("/issuesbystate", handleGiveIssuesByState)

router.get("/newIssue", (req, res) => {
    res.render("newissue.ejs");
});

router.post("/newIssue", handlePostNewIssue)

router.patch("/:id/upvote", handleUpvoteAnIssue)

module.exports = router;
