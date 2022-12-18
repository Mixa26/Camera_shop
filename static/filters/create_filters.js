function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            company: document.getElementById("company").value,
            diameter: document.getElementById("diameter").value,
            purpose: document.getElementById("purpose").value,
            price: document.getElementById("price").value,
            cameraShopId: document.getElementById("cameraShopId").value,
        };

        document.getElementById("company").value = "";
        document.getElementById("diameter").value = "";
        document.getElementById("purpose").value = "";
        document.getElementById("price").value = "";
        document.getElementById("cameraShopId").value = "";

        fetch("http://127.0.0.1:8000/api/filters",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}