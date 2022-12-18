function init(){

    fetch("http://127.0.0.1:8000/api/filters")
        .then( res => res.json() )
        .then( data => {
            const filters = document.getElementById("filters");

            Array.from(data).forEach(el => {
                filters.innerHTML += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.company}</td>
                <td>${el.diameter}</td>
                <td>${el.purpose}</td>
                <td>${el.price}</td>
              </tr>`
            })
        });
}
