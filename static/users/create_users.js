let errorMsg = "";

function validateUser(user){
    let valid = true;
    errorMsg = "";

    if (user.username.length <= 0){
        valid = false;
        errorMsg += "Username can't be empty!<br>";
    }
    if (user.email.length < 5 || !user.email.includes('@')){
        valid = false;
        errorMsg += "Email must be at least 5 characters long and be valid.<br>";
    }
    if (user.password.length < 4){
        valid = false;
        errorMsg += "Password must be at least 4 characters long.";
    }

    return valid;
}


function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            admin: document.getElementById("admin").checked
        };

        if (!validateUser(data)){
            document.getElementById('error').innerHTML = errorMsg;
            document.getElementById('error').style.color = "red";
        }
        else{
            fetch("http://127.0.0.1:8080/users",{
                method: 'post',
                headers: {'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
                body: JSON.stringify(data)
            }).then( res => res.json() )
            .then( el => {
                if (el.msg){
                    document.getElementById("error").innerHTML = el.msg;
                }
                else{
                    document.getElementById('error').innerHTML = "User created.";
                    document.getElementById('error').style.color = "green";

                    document.getElementById("username").value = "",
                    document.getElementById("email").value = "",
                    document.getElementById("password").value = "",
                    document.getElementById("admin").checked = false
                }
            })
        }
    });
}