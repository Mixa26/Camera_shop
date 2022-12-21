function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            company: document.getElementById("company").value,
            diameter: document.getElementById("diameter").value,
            purpose: document.getElementById("purpose").value,
            price: document.getElementById("price").value,
        };

        document.getElementById("id").value = "";
        document.getElementById("company").value = "";
        document.getElementById("diameter").value = "";
        document.getElementById("purpose").value = "";
        document.getElementById("price").value = "";

        fetch("http://127.0.0.1:8000/api/filters/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify(data)
        })
    });
}