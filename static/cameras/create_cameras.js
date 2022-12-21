function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            company: document.getElementById("company").value,
            model: document.getElementById("model").value,
            sensor: document.getElementById("sensor").value,
            megapixels: document.getElementById("megapixels").value,
            video_size: document.getElementById("video_size").value,
            video_fps: document.getElementById("video_fps").value,
            price: document.getElementById("price").value,
            cameraShopId: document.getElementById("cameraShopId").value
        };

        document.getElementById("company").value = "";
        document.getElementById("model").value = "";
        document.getElementById("sensor").value = "";
        document.getElementById("megapixels").value = "";
        document.getElementById("video_size").value = "";
        document.getElementById("video_fps").value = "";
        document.getElementById("price").value = "";
        document.getElementById("cameraShopId").value = "";

        fetch("http://127.0.0.1:8000/api/cameras",{
            method: 'post',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify(data)
        })
    });
}