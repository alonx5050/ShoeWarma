$(document).on('click', '.dropdown-menu', e => e.stopPropagation());

$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();

const user = JSON.parse(localStorage.getItem('user'));
if(user && user.isLoggedIn){
    $('.loginIcon').hide();
    if(user.isAdmin){
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.settingsIcon').show();
    }
    else {
         $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.bagIcon').show();
    }
}

$('.logoutIcon').click(function (){ 
    //e.preventDefault();
    localStorage.removeItem('user');
    
});