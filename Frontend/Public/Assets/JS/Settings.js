const user = JSON.parse(localStorage.getItem('user'));
if(user && user.isLoggedIn){
    $('.loginIcon').hide();
    if(user.isAdmin){
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.settingsIcon').show();
    }
}

$('.logoutIcon').click(function (){ 
    //e.preventDefault();
    localStorage.removeItem('user');
    
});