function init(){

    fetch("http://127.0.0.1:8000/api/employees")
        .then( res => res.json() )
        .then( data => {
            const employees = document.getElementById("employees");

            Array.from(data).forEach(el => {
                employees.innerHTML += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.name}</td>
                <td>${el.surname}</td>
                <td>${el.email}</td>
                <td>${el.phoneNum}</td>
              </tr>`
            })
        });
}
