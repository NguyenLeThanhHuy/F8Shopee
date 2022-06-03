
// Khởi tạo vùng lưu giá trị
const modal = document.getElementById('modal');
const nav_login = document.querySelector('.js-login-nav')
const modal_login = document.querySelector('.js-modal-login')
const js_back = document.querySelectorAll('.js-back')
const overlay_modal = document.querySelector('.modal__overlay')
const nav_signup = document.querySelector('.js-signup-nav')
const modal_signup = document.querySelector('.js-modal-signup')
const signup_form = document.querySelector('.js_sign-form')
const login_form = document.querySelector('.js_login_form')
// End

// Show modal
nav_login.addEventListener('click', () =>
{
    if($('.modal').css('display') === 'none')
{
    modal.classList.add('show_modal')
    modal_login.style.display = 'block'
    modal_signup.style.display = 'none'
}


})

nav_signup.addEventListener('click', () => {

    if($('.modal').css('display') === 'none')
    {
        modal.classList.add('show_modal')
        modal_signup.style.display = 'block'
        modal_login.style.display = 'none'
    }
})

// End


    // Toggle 2 bảng login and signup
signup_form.addEventListener('click', () => {
    modal_signup.style.display = 'block'
    modal_login.style.display = 'none'
})

login_form.addEventListener('click', () => {
    modal_signup.style.display = 'none'
    modal_login.style.display = 'block'
})

// Hide use btn Back
for (const item of js_back) {
    item.addEventListener('click', modal_hide)
}

function modal_hide() {
    modal.classList.remove('show_modal')
}
// Hide
overlay_modal.addEventListener('click', modal_hide)


// Loading Jquery 1

$(window).on('load', function(event) {
    $('.load').delay(700).fadeOut('fast');
})

// Product action liked
const btn_like = document.querySelector('.home-product-item__like')
const check = document.querySelector('.home-product-item__like.home-product-item__like-liked')
const liked = document.querySelector('.home-product-item__like-icon-fill')
const empty = document.querySelector('.home-product-item__like-icon-empty')

btn_liked.addEventListener('click', () => {
    if(check == true){
        alert('Hi')
    }else {
        alert()
    }
})














