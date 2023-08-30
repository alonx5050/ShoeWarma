import { getAllUsers } from "./ajax/getAllUsers.js";
import { renderUsers } from "./ajax/renderUsers.js";


const user = JSON.parse(localStorage.getItem('user'));
if (user && user.isLoggedIn) {
    $('.loginIcon').hide();
    if (user.isAdmin) {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.settingsIcon').show();
    }
}

$('.logoutIcon').click(function () {
    localStorage.removeItem('user'); // change
});

////////////////////

$(document).ready(async function () {
    const users = await getAllUsers();
    renderUsers(users);
});