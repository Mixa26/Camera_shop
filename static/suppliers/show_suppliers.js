function init(){

    fetch("http://127.0.0.1:8000/api/suppliers")
        .then( res => res.json() )
        .then( data => {
            const suppliers = document.getElementById("suppliers");

            Array.from(data).forEach(el => {
                suppliers.innerHTML += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.name}</td>
                <td>${el.country_origin}</td>
              </tr>`
            })
        });
}
