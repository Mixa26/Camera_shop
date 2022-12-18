function init(){

    fetch("http://127.0.0.1:8000/api/tripods")
        .then( res => res.json() )
        .then( data => {
            const tripods = document.getElementById("tripods");

            Array.from(data).forEach(el => {
                tripods.innerHTML += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.company}</td>
                <td>${el.model}</td>
                <td>${el.carry_capacity}</td>
                <td>${el.meant_for}</td>
                <td>${el.price}</td>
              </tr>`
            })
        });
}
