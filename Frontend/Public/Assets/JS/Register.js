import { Register } from "./ajax/Register.js";

$('#Register-btn').click(Registered);

$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();

function Registered() {
    const fullName = $('#fullName').val();
    const email = $('#email').val();
    const password = $('#password').val(); // Get the password value
    const address = $('#address').val();

    const userData = {
        fullName: fullName,
        email: email,
        password: password,
        address: address
    };

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/users',
        data: JSON.stringify(userData),
        contentType: 'application/json',
        success: function (data) {
            console.log('User registered successfully:', data);
            Register(data);

            window.location.href = 'Homepage.html';
        },
        error: function (error) {
            console.error('Error registering user:', error);
        }
    });
}

export { Register };