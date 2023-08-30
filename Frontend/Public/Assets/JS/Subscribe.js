$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();

const user = JSON.parse(localStorage.getItem('user'));
if (user && user.isLoggedIn) {
    $('.loginIcon').hide();
    if (user.isAdmin) {
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

$('.logoutIcon').click(function () {
    var temp = localStorage.getItem('ManagerArray');
    localStorage.clear();
    localStorage.setItem('ManagerArray',temp);
});

const subscribeForm = document.querySelector('.mainContentContainer');

subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const subscribeContainer = document.querySelector('.mainContentContainer');
    subscribeContainer.innerHTML = ''; // Clear the content of the container

    const messageCard = document.createElement('div');
    messageCard.className = 'card message-card text-center';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const message = document.createElement('p');
    message.textContent = 'Thank you for subscribing! We will update you.';

    const smileIcon = document.createElement('i');
    smileIcon.className = 'material-icons';
    smileIcon.textContent = 'mood';

    cardBody.appendChild(message);
    cardBody.appendChild(smileIcon);
    messageCard.appendChild(cardBody);
    subscribeContainer.appendChild(messageCard);
});