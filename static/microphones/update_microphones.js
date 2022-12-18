function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            company: document.getElementById("company").value,
            model: document.getElementById("model").value,
            type: document.getElementById("type").value,
            frequency_range: document.getElementById("frequency_range").value,
            price: document.getElementById("price").value,
        };

        document.getElementById("id").value = "";
        document.getElementById("company").value = "";
        document.getElementById("model").value = "";
        document.getElementById("type").value = "";
        document.getElementById("frequency_range").value = "";
        document.getElementById("price").value = "";

        fetch("http://127.0.0.1:8000/api/microphones/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}