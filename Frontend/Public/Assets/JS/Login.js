import { login } from './ajax/login.js';

$('#Login-btn').click(async (e) => {
    e.preventDefault();
    await login();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    // if (user && user.isLoggedIn) {
    //     if (user.isAdmin) $('#Settings').removeClass('visually-hidden');
    //     else $('#Homepage').removeClass('visually-hidden');

    //     $('#Register-btn').hide();
    //     $('#Login-btn').hide();
    //     $('#logout-btn').removeClass('visually-hidden');
    // }
});



