const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

let users = [];
let emails = [];

// LOGIN
app.post("/login", (req,res)=>{
    const {username,password} = req.body;

    let user = users.find(u=>u.username===username);

    if(!user){
        users.push({username,password});
        console.log("User Saved:", username);
    }

    res.json({success:true});
});

// SAVE EMAIL
app.post("/save-email",(req,res)=>{
    const {email} = req.body;

    emails.push(email);
    console.log("Email Saved:", email);

    res.send("Email Saved ✅");
});

// SOS
app.post("/sos",(req,res)=>{
    console.log("🚨 SOS:", req.body.message);
    res.send("SOS Sent");
});

app.listen(3000, ()=>console.log("Server running on http://localhost:3000"));
