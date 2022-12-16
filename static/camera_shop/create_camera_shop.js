function init() {
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
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}