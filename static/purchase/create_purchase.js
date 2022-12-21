function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            price: document.getElementById("price").value,
            date: document.getElementById("date").value,
            cameraShopId: document.getElementById("cameraShopId").value
        };

        document.getElementById("price").value = "";
        document.getElementById("date").value = "";
        document.getElementById("cameraShopId").value = "";

        fetch("http://127.0.0.1:8000/api/purchases",{
            method: 'post',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify(data)
        })
    });
}