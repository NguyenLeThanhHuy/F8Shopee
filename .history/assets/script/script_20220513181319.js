// Show / Hide Modal Login , Register

const Modal = document.querySelector('.modal');
const Convert = document.querySelector('.auth-form__switch-btn')
const Login = document.querySelector('.header__navbar--login')
const SignUp = document.querySelector('.header__navbar--signup')
const SignUp_modal= document.querySelector('.auth-form__register')
const Login_modal = document.querySelector('.auth-form__login')
const overLay = document.querySelector('.modal__overlay')

Login.addEventListener('click', () => {
    if(5+5 !=0) 
    {
        Modal.classList.add('modal-show')
        Login_modal.style.display = 'block'
    }
    else {
        alert("hello")
    }
    
   })

overLay.addEventListener('click', () => {
    Modal.classList.remove('modal-show')
})