
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

    let index1 = 0;
        rating_item1.addEventListener('click', () => {
            index2 = 0;
            index3 = 0;
            index4 = 0;
            index5 = 0;
            if(rating_item1.classList.contains('rated') && index1 > 0) {
                rating_item1.classList.remove('rated');
                console.log(index1 + 'in1')
            }else if(rating_item1.classList.contains('rated') && index1 == 0){
                rating_item2.classList.remove('rated');        
                rating_item3.classList.remove('rated');        
                rating_item4.classList.remove('rated');        
                rating_item5.classList.remove('rated'); 
                index1++;   
                console.log(index1 + 'in1')
            }else {
                rating_item1.classList.add('rated'); 
                index1++; 
                console.log(index1 + 'in1')
            }
        })

        let index2=0;
        rating_item2.addEventListener('click', () => {
            index1 = 0;
            index3 = 0;
            index4 = 0;
            index5 = 0;
            if(rating_item2.classList.contains('rated') && index2 > 0) {
                rating_item2.classList.remove('rated');
                rating_item1.classList.remove('rated');
                console.log(index2 + 'in2')
            }else if(rating_item2.classList.contains('rated') && index2 == 0){       
                rating_item3.classList.remove('rated');        
                rating_item4.classList.remove('rated');        
                rating_item5.classList.remove('rated'); 
                index2++;   
                console.log(index2 + 'in2')
            }else {
                rating_item1.classList.add('rated'); 
                rating_item2.classList.add('rated'); 
                index2++; 
                console.log(index2 + 'in2')
            }
        })

        let index3 =0;
        rating_item3.addEventListener('click', () => {
            index1 = 0;
            index2 = 0;
            index4 = 0;
            index5 = 0;
            if(rating_item3.classList.contains('rated') && index3 > 0) {
                rating_item3.classList.remove('rated');
                rating_item2.classList.remove('rated');
                rating_item1.classList.remove('rated');
                console.log(index3 + 'in3')
            }else if(rating_item3.classList.contains('rated') && index3 == 0){
                rating_item4.classList.remove('rated');        
                rating_item2.classList.remove('rated');         
                index3++;   
                console.log(index3 + 'in3')
            }else {
                rating_item1.classList.add('rated'); 
                rating_item2.classList.add('rated'); 
                rating_item3.classList.add('rated'); 
                index3++; 
                console.log(index3 + 'in3')
            }
        })

        let index4 = 0;
        rating_item4.addEventListener('click', () => {
            index1 = 0;
            index2 = 0;
            index3 = 0;
            index5 = 0;
            if(rating_item4.classList.contains('rated') && index4 > 0) {
                rating_item4.classList.remove('rated');
                rating_item3.classList.remove('rated');
                rating_item2.classList.remove('rated');
                rating_item1.classList.remove('rated');
                console.log(index4 + 'in4')
            }else if(rating_item4.classList.contains('rated') && index4 == 0){
                rating_item1.classList.remove('rated');        
                rating_item2.classList.remove('rated');        
                rating_item3.classList.remove('rated');        
                rating_item5.classList.remove('rated'); 
                console.log(index4 + 'in4')
                index4++;   
            }else {
                rating_item1.classList.add('rated'); 
                rating_item2.classList.add('rated'); 
                rating_item3.classList.add('rated'); 
                rating_item4.classList.add('rated'); 
                index4++; 
                console.log(index4 + 'in4')
            }
        })

        let index5 =0;
        rating_item5.addEventListener('click', () => {
            index1 = 0;
            index2 = 0;
            index3 = 0;
            index4 = 0;
            if(rating_item5.classList.contains('rated') && index5 > 0) {
                rating_item5.classList.remove('rated');
                rating_item4.classList.remove('rated');
                rating_item3.classList.remove('rated');
                rating_item2.classList.remove('rated');
                rating_item1.classList.remove('rated');
                console.log(index5 + 'in5')
            }else if(rating_item5.classList.contains('rated') && index5 == 0){
                rating_item1.classList.remove('rated');        
                rating_item2.classList.remove('rated');        
                rating_item3.classList.remove('rated');        
                rating_item4.classList.remove('rated'); 
                index5++;   
                console.log(index5 + 'in5')
            }else {
                rating_item1.classList.add('rated'); 
                rating_item2.classList.add('rated'); 
                rating_item3.classList.add('rated'); 
                rating_item4.classList.add('rated'); 
                rating_item5.classList.add('rated'); 
                index5++; 
                console.log(index5 + 'in5')
            }
        })













