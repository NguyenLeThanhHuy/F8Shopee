const modal = document.getElementById('modal');
const nav_login = document.querySelector('.js-login-nav')
const modal_login = document.querySelector('.js-modal-login')
const overlay_back = document.querySelector('.js-back')



nav_login.addEventListener('click', () =>
{
    if($('.modal').css('display') === 'none')
{
    modal.classList.add('show_modal')
    modal_login.style.display = 'block'
}
else {
    modal.classList.remove('show_modal')
    modal_login.style.display = 'block'
}
})




