function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        const data = {
            price: 0,
        };

        fetch("http://127.0.0.1:8000/api/shopping_cart",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    });
}