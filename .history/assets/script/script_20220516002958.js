const modal = document.getElementById('modal');
const nav_login = document.querySelector('.js-login-nav')





nav_login.addEventListener('click', () =>
{
    if($('.modal').css('display') === 'none')
{
    modal.classList.add('show_modal')
    alert('hihi');
}
else {
    modal.classList.remove('show_modal')
    alert('haha');
}
})


