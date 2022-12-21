function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            company: document.getElementById("company").value,
            model: document.getElementById("model").value,
            type: document.getElementById("type").value,
            frequency_range: document.getElementById("frequency_range").value,
            price: document.getElementById("price").value,
            cameraShopId: document.getElementById("cameraShopId").value
        };

        document.getElementById("company").value = "";
        document.getElementById("model").value = "";
        document.getElementById("type").value = "";
        document.getElementById("frequency_range").value = "";
        document.getElementById("price").value = "";
        document.getElementById("cameraShopId").value = "";

        fetch("http://127.0.0.1:8000/api/microphones",{
            method: 'post',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify(data)
        })
    });
}