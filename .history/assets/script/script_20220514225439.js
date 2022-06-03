// Show / Hide Modal Login , Register

const Modal = document.querySelector('.modal');
const Convert = document.querySelector('.auth-form__switch-btn')
const Login = document.querySelector('.header__navbar--login')
const SignUp = document.querySelector('.header__navbar--signup')
const SignUp_modal= document.querySelector('.auth-form__register')
const Login_modal = document.querySelector('.auth-form__login')
const overLay = document.querySelector('.modal__overlay')
const back_login = document.querySelector('.auth-form__back')
const Loggin = document.querySelector('.auth-form')

Login.addEventListener('click', Modal_show)

function Modal_show(){
    if(Login_modal.style.display == 'none') 
    {
        Modal.classList.add('modal-show')
        Login_modal.style.display = 'block'
    } 
}

overLay.addEventListener('click',  Modal_hide)

function Modal_hide() {
    Modal.classList.remove('modal-show')
}

back_login.addEventListener('click', Modal_hide)
