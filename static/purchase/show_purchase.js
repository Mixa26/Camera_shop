function init(){

    fetch("http://127.0.0.1:8000/api/purchases")
        .then( res => res.json() )
        .then( data => {
            const purchases = document.getElementById("purchases");

            Array.from(data).forEach(el => {
                purchases.innerHTML += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.price}</td>
                <td>${el.date}</td>
              </tr>`
            })
        });
}
