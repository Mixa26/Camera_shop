function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            price: document.getElementById("price").value,
            date: document.getElementById("date").value,
        };

        document.getElementById("id").value = "";
        document.getElementById("price").value = "";
        document.getElementById("date").value = "";

        fetch("http://127.0.0.1:8000/api/purchases/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}