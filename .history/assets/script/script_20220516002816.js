const modal = document.getElementById('modal');
const nav_login = document.querySelector('.js-login-nav')





if($('.modal').css('display') === 'none')
{
    modal.classList.add('show_modal')
    nav_login.style.display = 'block'
}
else {
    modal.classList.remove('show_modal')
    nav_login.style.display = 'none'
}


