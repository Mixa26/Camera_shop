function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            company: document.getElementById("company").value,
            model: document.getElementById("model").value,
            carry_capacity: document.getElementById("carry_capacity").value,
            meant_for: document.getElementById("meant_for").value,
            price: document.getElementById("price").value
        };

        document.getElementById("id").value = "";
        document.getElementById("company").value = "";
        document.getElementById("model").value = "";
        document.getElementById("carry_capacity").value = "";
        document.getElementById("meant_for").value = "";
        document.getElementById("price").value = "";

        fetch("http://127.0.0.1:8000/api/tripods/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}