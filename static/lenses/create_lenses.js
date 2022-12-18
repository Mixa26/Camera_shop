function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            company: document.getElementById("company").value,
            zoom: document.getElementById("zoom").value,
            focal_length: document.getElementById("focal_length").value,
            mount: document.getElementById("mount").value,
            price: document.getElementById("price").value,
            cameraShopId: document.getElementById("cameraShopId").value
        };

        document.getElementById("company").value = "";
        document.getElementById("zoom").value = "";
        document.getElementById("focal_length").value = "";
        document.getElementById("mount").value = "";
        document.getElementById("price").value = "";
        document.getElementById("cameraShopId").value = "";

        fetch("http://127.0.0.1:8000/api/lenses",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}