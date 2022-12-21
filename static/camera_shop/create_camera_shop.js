function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            location: document.getElementById("location").value
        };

        document.getElementById("name").value = "";
        document.getElementById("location").value = "";

        fetch("http://127.0.0.1:8000/api/camera_shops",{
            method: 'post',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify(data)
        })
    });
}