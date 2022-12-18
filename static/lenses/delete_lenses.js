function init() {
    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();

        let number = document.getElementById("id").value

        document.getElementById("id").value = "";

        fetch("http://127.0.0.1:8000/api/lenses/" + number,{
            method: 'delete',
        })
    });
}