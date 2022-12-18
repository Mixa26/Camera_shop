function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            country_origin: document.getElementById("country_origin").value,
            cameraShopId: document.getElementById("cameraShopId").value
        };

        document.getElementById("name").value = "";
        document.getElementById("country_origin").value = "";
        document.getElementById("cameraShopId").value = "";

        fetch("http://127.0.0.1:8000/api/suppliers",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}