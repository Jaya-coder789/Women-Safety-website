// LOGIN
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,password})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            localStorage.setItem("loggedIn","true");
            window.location.href="index.html";
        }
    });
}

// EMAIL
function addEmail(){
    let email=document.getElementById("email").value;

    fetch("http://localhost:3000/save-email",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email})
    })
    .then(res=>res.text())
    .then(data=>alert(data));
}

// SOS
function sendSOS(){
    navigator.geolocation.getCurrentPosition(function(pos){

        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        let link = "https://maps.google.com/?q="+lat+","+lon;

        let message = `🚨 SOS ALERT!

Help me, I am in danger.

📍 My Live Location:
${link}

Please help me immediately!`;

        alert(message);

        fetch("http://localhost:3000/sos",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({message})
        });

    });
}

// FAKE CALL
function fakeCall(){
    alert("📞 Incoming Call...");
}

// MAP
function showPolice(){
    navigator.geolocation.getCurrentPosition(function(pos){
        window.open(`https://www.google.com/maps/search/police+station/@${pos.coords.latitude},${pos.coords.longitude}`);
    });
}

function showHospital(){
    navigator.geolocation.getCurrentPosition(function(pos){
        window.open(`https://www.google.com/maps/search/hospital/@${pos.coords.latitude},${pos.coords.longitude}`);
    });
}

// LOGOUT
function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href="login.html";
}
