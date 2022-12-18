function init(){

    fetch("http://127.0.0.1:8000/api/cameras")
        .then( res => res.json() )
        .then( data => {
            const cameras = document.getElementById("cameras");

            Array.from(data).forEach(el => {
                cameras.innerHTML += `<tr>
                <th scope="row">${el.id}</th>
                <td>${el.company}</td>
                <td>${el.model}</td>
                <td>${el.sensor}</td>
                <td>${el.megapixels}</td>
                <td>${el.video_size}</td>
                <td>${el.video_fps}</td>
                <td>${el.price}</td>
              </tr>`
            })
        });
}
