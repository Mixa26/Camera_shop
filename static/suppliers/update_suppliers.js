function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            name: document.getElementById("name").value,
            country_origin: document.getElementById("country_origin").value,
        };

        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("country_origin").value = "";

        fetch("http://127.0.0.1:8000/api/suppliers/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}