function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            name: document.getElementById("shopName").value,
            location: document.getElementById("shopLocation").value
        };

        document.getElementById("id").value = "";
        document.getElementById("shopName").value = "";
        document.getElementById("shopLocation").value = "";

        fetch("http://127.0.0.1:8000/api/camera_shops/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}