const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));


// LOGIN API
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    console.log("User Login:", username);

    res.json({
        success: true
    });

});


// START SERVER
app.listen(3000, () => {

    console.log("🚀 Server running on http://localhost:3000");

});
