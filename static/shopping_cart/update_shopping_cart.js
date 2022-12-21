function init() {
    const cookies = document.cookie.split("=");
    const token = cookies[cookies.length -1];

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        const data = {
            price: document.getElementById("price").value
        };

        document.getElementById("id").value = "";
        document.getElementById("price").value = "";

        fetch("http://127.0.0.1:8000/api/shopping_cart/" + number,{
            method: 'put',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify(data)
        })
    });
}