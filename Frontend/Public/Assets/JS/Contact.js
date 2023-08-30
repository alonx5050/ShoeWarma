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


//////////////////////////////////////////////

   // Add event listeners to checkboxes
   const districtCheckboxes = document.querySelectorAll('.district-checkbox');
   const cityCheckboxes = document.querySelectorAll('.city-checkbox');
   const listItems = document.querySelectorAll('.list-item');

   [...districtCheckboxes, ...cityCheckboxes].forEach(checkbox => {
       checkbox.addEventListener('change', updateFilters);
   });

   function updateFilters() {
       const selectedDistricts = Array.from(districtCheckboxes)
           .filter(checkbox => checkbox.checked)
           .map(checkbox => checkbox.value);
       
       const selectedCities = Array.from(cityCheckboxes)
           .filter(checkbox => checkbox.checked)
           .map(checkbox => checkbox.value);
       
       listItems.forEach(item => {
           const district = item.getAttribute('data-district');
           const city = item.getAttribute('data-city');
           if (
               (selectedDistricts.length === 0 || selectedDistricts.includes(district)) &&
               (selectedCities.length === 0 || selectedCities.includes(city))
           ) {
               item.style.display = 'block';
           } else {
               item.style.display = 'none';
           }
       });
   }


$(document).on('click', '.dropdown-menu', e => e.stopPropagation());

