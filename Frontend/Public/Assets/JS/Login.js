import { login } from './ajax/login.js';

$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();

$('#Login-btn').click(async (e) => {
    e.preventDefault();
    await login();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
});




