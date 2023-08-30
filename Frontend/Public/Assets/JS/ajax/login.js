import { loginBody } from "./bodyMaker.js";

async function login() {
    const url = 'http://localhost:3000/users/login';

    $.ajax({
        type: 'POST',
        url,
        data: JSON.stringify(loginBody()),
        contentType: 'application/json',
        success: function (data) {
            const isAdmin = data.user.role === 'admin';
            localStorage.setItem('user', JSON.stringify({ isLoggedIn: true, isAdmin, user: data.user }));
            window.location.href = "Homepage.html";
        },
        error: function (error) {
            console.log(error);
            alert(error.responseText);
        },
    });
}



export { login };