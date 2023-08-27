import { loginBody } from "./bodyMaker.js";

async function login(e) {

    e.preventDefault();
    const url = 'http://localhost:3000/users/login';

    $.ajax({
        type: 'POST',
        url,
        data: JSON.stringify(loginBody()),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
            alert(error.responseText);
        },
    });
}



export { login };