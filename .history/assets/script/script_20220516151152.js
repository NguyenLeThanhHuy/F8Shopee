const modal = document.getElementById('modal');
const nav_login = document.querySelector('.js-login-nav')
const modal_login = document.querySelector('.js-modal-login')
const js_back = document.querySelector('.js-back')
// const overlay_modal = document.querySelector('.modal__overlay')
// const nav_signup = document.querySelector('.js-signup-nav')
// const modal_signup = document.querySelector('.js-modal-signup')



nav_login.addEventListener('click', () =>
{
    if($('.modal').css('display') === 'none')
{
    modal.classList.add('show_modal')
    modal_login.style.display = 'block'
}

})

// nav_signup.addEventListener('click', () => {

//     if($('.modal').css('display') === 'none')
//     {
//         modal.classList.add('show_modal')
//         modal_signup.style.display = 'block'
//     }
// })

// function modal_hide() {
//     modal.classList.remove('show_modal')
// }

// js_back.addEventListener('click', modal_hide)

// overlay_modal.addEventListener('click', modal_hide)






