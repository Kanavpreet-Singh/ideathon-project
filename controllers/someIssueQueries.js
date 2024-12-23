const {Issue}=require("../models/e-gov")

async function handleGiveIssuesByState(req,res){
    try {
        const { state } = req.query;
        const issues = await Issue.find({ state });

        if (issues && issues.length > 0) {
            res.render("issues.ejs", { issues });
        } else {
            res.render("noissues.ejs", { state });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong!");
    }
}
async function handlePostNewIssue(req,res){
    try {
        const newIssue = new Issue({
            username: req.body.username,
            state: req.body.state,
            district: req.body.district,
            subject: req.body.subject,
            description: req.body.description,
        });

        await newIssue.save();
        res.redirect("/issues");
    } catch (error) {
        console.error("Error saving the issue:", error);
        res.status(500).send("Something went wrong while posting the issue. Please try again.");
    }
}
async function handleUpvoteAnIssue(req,res){
    const { id } = req.params;

    try {
        const issue = await Issue.findById(id);
        if (issue) {
            issue.upvote += 1;
            await issue.save();
        }

        res.render("confirmation.ejs", { updatedUser: issue });
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong!");
    }
}

module.exports={handleGiveIssuesByState,handlePostNewIssue,handleUpvoteAnIssue}
