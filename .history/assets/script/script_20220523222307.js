
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

btn_like.addEventListener('click', () => {
    if(btn_like.classList.contains('home-product-item__like-liked')){
        btn_like.classList.remove('home-product-item__like-liked')
    }else {
        btn_like.classList.add('home-product-item__like-liked')
    }
})

// Product action rating
    const rating_item = document.querySelector('.home-product-item__rating')
    const rating_item1 = document.querySelector('.home-product-item__rating-1')
    const rating_item2 = document.querySelector('.home-product-item__rating-2')
    const rating_item3 = document.querySelector('.home-product-item__rating-3')
    const rating_item4 = document.querySelector('.home-product-item__rating-4')
    const rating_item5 = document.querySelector('.home-product-item__rating-5')

        rating_item1.addEventListener('click', () => {
            if(rating_item.classList.contains('rated')) {
                rating_item1.cla
            }else {
                // rating_item1.style.color = "#d5d5d5"
            }
        })













