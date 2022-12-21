function init(){
    
    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            admin: document.getElementById('admin').checked
        }

        fetch("http://127.0.0.1:8080/register",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then( res => res.json() )
        .then( el => {
            document.getElementById('username').value = "",
            document.getElementById('email').value = "",
            document.getElementById('password').value = "",
            document.getElementById('admin').checked = false

            document.cookie = `token=${el.token};SameSite=Lax`;
            
            window.location.href = '/admin/main';       
        })
       
    })
}