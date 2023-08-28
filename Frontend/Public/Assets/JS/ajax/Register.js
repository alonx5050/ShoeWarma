import { signupBody } from "./bodyMaker.js";


async function Register(e) {

    e.preventDefault();
    const url = 'http://localhost:3000/users/Register';

    $.ajax({
        type: 'POST',
        url,
        data: JSON.stringify(signupBody()),
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



export { Register };