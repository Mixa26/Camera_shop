function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            company: document.getElementById("company").value,
            zoom: document.getElementById("zoom").value,
            focal_length: document.getElementById("focal_length").value,
            mount: document.getElementById("mount").value,
            price: document.getElementById("price").value,
        };

        document.getElementById("id").value = "";
        document.getElementById("company").value = "";
        document.getElementById("zoom").value = "";
        document.getElementById("focal_length").value = "";
        document.getElementById("mount").value = "";
        document.getElementById("price").value = "";

        fetch("http://127.0.0.1:8000/api/lenses/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}