function init(){

    fetch("http://127.0.0.1:8000/api/camera_shops")
        .then( res => res.json() )
        .then( data => {
            const shops = document.getElementById("shops");

            Array.from(data).forEach(el => {
                shops.innerHTML += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.name}</td>
                <td>${el.location}</td>
              </tr>`
            })
        });
}
