const { User, Official } = require("../models/e-gov")

async function handleUserSignup(req, res) {
    const { first_name, last_name, age, username, email, password } = req.body;

    try {
        // Check if email already exists in the database
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // If the email already exists, return an error message
            return res.render("signup", {
                error: "Email already exists. Please choose another one."
            });
        }

        // If email doesn't exist, create the new user
        await User.create({ first_name, last_name, age, username, email, password });

        // Redirect to the home page or another page after successful signup
        return res.redirect("http://localhost:8000");

    } catch (error) {
        console.error(error);
        return res.status(500).render("signup", {
            error: "An error occurred during signup. Please try again later."
        });
    }
}



async function handleOfficialSignup(req, res) {
    const { first_name, last_name, age, username, email, password } = req.body;

    try {
        // Check if email already exists
        const existingUser = await Official.findOne({ email });

        if (existingUser) {
            // If the email already exists, return an error message
            return res.render("signupOfficial", {
                error: "Email already exists. Please choose another one."
            });
        }

        // Create a new Official record
        await Official.create({ first_name, last_name, age, username, email, password });

        // Redirect to the issues page after successful signup
        res.redirect("/issues");

    } catch (error) {
        console.error(error);
        res.status(500).render("signupOfficial", {
            error: "An error occurred during signup. Please try again later."
        });
    }
}




async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    try {
        // Check if email and password are provided
        if (!email || !password) {
            return res.render("login.ejs", {
                error: "Email and password are required.",
            });
        }


        const user = await User.findOne({ email, password });
        if (!user) {

            return res.render("login.ejs", {
                error: "Invalid email or password.",
            });
        }

        
        console.log("Logged in user:", user);
        res.render("home");
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send("Something went wrong during login.");
    }
}

async function handleOfficialLogin(req, res) {
    const { email, password } = req.body;

    try {
        // Check if email and password are provided
        if (!email || !password) {
            return res.render("loginOfficial.ejs", {
                error: "Email and password are required.",
            });
        }


        const user = await Official.findOne({ email, password });
        if (!user) {

            return res.render("loginOfficial.ejs", {
                error: "Invalid email or password.",
            });
        }

        
        console.log("Logged in official:", user);
        res.redirect("/issues")
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).send("Something went wrong during login.");
    }
}


module.exports = { handleUserSignup, handleUserLogin,handleOfficialSignup,handleOfficialLogin }