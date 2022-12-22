let errorMsg = "";

function validate(number){
    errorMsg = "";
    
    if (!Number(number)){errorMsg = "Id must be a number!"}
    return Number(number);
}

function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        if (!validate(number)){
            document.getElementById('error').innerHTML = errorMsg;
            document.getElementById('error').style.color = "red";
        }
        else{
            fetch("http://127.0.0.1:8000/api/employees/" + number,{
                method: 'delete',
                headers: {'Authorization': `Bearer ${token}`}
            })
            
            document.getElementById("id").value = "";
        }
    });
}