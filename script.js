// LOGIN
function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("Please enter username and password");
        return;
    }

    fetch("http://localhost:3000/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: username,
            password: password
        })

    })

    .then(response => response.json())

    .then(data => {

        if(data.success){

            localStorage.setItem("loggedIn", "true");

            window.location.href = "index.html";

        } else {

            alert("Login Failed");

        }

    })

    .catch(error => {

        console.log(error);
        alert("Server Error");

    });

}


// ADD EMAIL
function addEmail(){

    let email = document.getElementById("email").value;

    if(email === ""){
        alert("Enter Email");
        return;
    }

    alert("Emergency Email Added:\n" + email);

}


// SOS
function sendSOS(){

    navigator.geolocation.getCurrentPosition(function(pos){

        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        let locationLink =
        "https://maps.google.com/?q=" + lat + "," + lon;

        let message =
        "🚨 HELP ME! I AM IN DANGER\n\n📍 Location:\n" + locationLink;

        alert(message);

    });

}


// ✅ FAKE CALL WORKING
function fakeCall(){

    let fakeWindow = window.open("", "_blank", "width=350,height=600");

    fakeWindow.document.write(`

    <html>

    <head>
    <title>Incoming Call</title>

    <style>

    body{
        background:black;
        color:white;
        text-align:center;
        font-family:Arial;
        padding-top:150px;
    }

    h1{
        font-size:35px;
    }

    h2{
        color:lightgreen;
    }

    button{
        padding:15px;
        margin:20px;
        border:none;
        border-radius:50%;
        width:80px;
        height:80px;
        color:white;
        font-size:16px;
    }

    .accept{
        background:green;
    }

    .reject{
        background:red;
    }

    </style>

    </head>

    <body>

    <h1>📞 Incoming Call</h1>

    <h2>Police Station 🚓</h2>

    <button class="accept"
    onclick="alert('Call Connected')">
    Accept
    </button>

    <button class="reject"
    onclick="window.close()">
    Reject
    </button>

    </body>

    </html>

    `);

}


// ✅ NEAREST POLICE STATION
function showPolice(){

    navigator.geolocation.getCurrentPosition(function(pos){

        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        let policeURL =
        `https://www.google.com/maps/search/?api=1&query=police+station&center=${lat},${lon}`;

        window.open(policeURL, "_blank");

    },
    function(error){

        alert("Location access denied!");

    });

}


// ✅ NEAREST HOSPITAL
function showHospital(){

    navigator.geolocation.getCurrentPosition(function(pos){

        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        let hospitalURL =
        `https://www.google.com/maps/search/?api=1&query=hospital&center=${lat},${lon}`;

        window.open(hospitalURL, "_blank");

    },
    function(error){

        alert("Location access denied!");

    });

}


// LOGOUT
function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";

}

