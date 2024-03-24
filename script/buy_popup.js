

body.addEventListener("click", function click(click){
    const popupClick = document.querySelector(".buyClick");
const popup = document.querySelector(".popupShadow");

    if(click.target.className == "btn_buy" ){
    popup.classList.remove("no_show")
    popup.classList.add("show_animation")
  
    body.style.overflowY = ("hidden");
}else if(click.target.className == "popupShadow show_animation"){
    popup.classList.remove("show_animation")
    popup.classList.add("no_show")
    body.style.overflowY = ("scroll");
    
}
 })

 const popupPayment_buyType = document.querySelector(".popupPayment_buyType")

    const buyType_card = document.querySelector("#buyType_card"),
    buyType_card_img = document.querySelector("#buyType_card-img"),
    buyTupe_sberPay = document.querySelector("#buyTupe_sberPay"),
    buyType_sberPay_img = document.querySelector("#buyType_sberPay-img"),
    buyTupe_payPal = document.querySelector("#buyTupe_payPal"),
    buyType_paypal_img = document.querySelector("#buyType_paypal-img"),
    buyTupe_youMoney = document.querySelector("#buyTupe_youMoney"),
    buyType_youModey_img = document.querySelector("#buyType_youModey-img"),
    buyTupe_other = document.querySelector("#buyTupe_other")

    const h4_description = document.querySelector("#h4_description"),
    p_form_description = document.querySelector("#p_form_description"),
    formInput = document = document.querySelector(".formInput")


    const arrayBuyType = [
        buyType_card,
        buyTupe_sberPay,
        buyTupe_payPal,
        buyTupe_youMoney,
        buyTupe_other
    ]

function addClassRemove(click){
    console.log(click)
    
    arrayBuyType.forEach((elem) => {elem.classList.remove("active-buyType") });
    if(click.target.className == "popupPayment_buyType-img") {
        click.target.parentElement.classList.add("active-buyType")
    }
    if(click.target.className == "popupPayment_buyForm_item"){
        click.target.classList.add("active-buyType")
    }
    if(click.target.parentElement.id == "buyTupe_other"){
         click.target.parentElement.classList.add("active-buyType")
    }
    // console.log(click.target.value)
  }

popupPayment_buyType.addEventListener('click', function(click){
    // console.log()
    switch(true){
        case click.target == buyType_card || click.target == buyType_card_img: 
            addClassRemove(click);
            h4_description.innerText = "Оплата картой"
            p_form_description.innerText = "Введите номер карты"
            formInput.placeholder = "XXXX-XXXX-XXXX-XXXX"

            break;
        case click.target == buyTupe_sberPay || click.target == buyType_sberPay_img:
            addClassRemove(click);
            h4_description.innerText = "Оплата через СберPay"
            p_form_description.innerText = "Введите номер телефона"
            // formInput.style.fontSize = "3vw"
            formInput.placeholder = "+7 XXX-XXX-XX-XX"
             break;
        case click.target == buyTupe_payPal || click.target == buyType_paypal_img:
             addClassRemove(click);
             h4_description.innerText = "Оплата через Paypal "
             p_form_description.innerText = "Введите Эл. Почту"
             formInput.placeholder = "Example@mail.com"
             break;
        case click.target == buyTupe_youMoney || click.target == buyType_youModey_img: 
             addClassRemove(click);
             h4_description.innerText = "Оплата кошельком Youmoney"
             p_form_description.innerText = "Введите номер телефона"
             formInput.placeholder = "+7 XXX-XXX-XX-XX"
             break;
        case click.target == buyTupe_other || click.target.className == "buy_buyType_text" || click.target.className == "popupPayment_buyType-icon"  :
             addClassRemove(click);
             break;
    }
   
    
    })


    



const popupImage = document.querySelector("#book_image"),
bookImageMain = document.querySelector(".main_book_images"),
popupNameBook = document.querySelector("#popupNameBook"),
popupTitleBook = document.querySelector("#popupTitleBook"),
titleOfBbook = document.querySelector(".title_of_book"),
textDescript = document.querySelector("#text_descript-id");


popupNameBook.innerHTML = titleOfBbook.innerHTML;
popupTitleBook.innerHTML = textDescript.innerHTML;
popupImage.attributes[0].nodeValue = bookImageMain.attributes[0].nodeValue;



//MASKs

// window.addEventListener("DOMContentLoaded", function() {
//     [].forEach.call( document.querySelectorAll('.formInput'), function(input){
//       var keyCode;
//       function mask(event) {
//         event.keyCode && (keyCode = event.keyCode);
//         var pos = this.selectionStart;
//         if (pos < 3) event.preventDefault();
//         var matrixPhone = "+7 (___) ___ ____",
//             i = 0,
//             def = matrixPhone.replace(/\D/g, ""),
//             val = this.value.replace(/\D/g, ""),
//             new_value = matrixPhone.replace(/[_\d]/g, function(a) {
//                 return i < val.length ? val.charAt(i++) : a
//             });
//         i = new_value.indexOf("_");
//         if (i != -1) {
//             i < 5 && (i = 3);
//             new_value = new_value.slice(0, i)
//         }
//         var reg = matrixPhone.substr(0, this.value.length).replace(/_+/g,
//             function(a) {
//                 return "\\d{1," + a.length + "}"
//             }).replace(/[+()]/g, "\\$&");
//         reg = new RegExp("^" + reg + "$");
//         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
//           this.value = new_value;
//         }
//         if (event.type == "blur" && this.value.length < 5) {
//           this.value = "";
//         }
//       }
  
//       input.addEventListener("input", mask, false);
//       input.addEventListener("focus", mask, false);
//       input.addEventListener("blur", mask, false);
//       input.addEventListener("keydown", mask, false);
  
//     });
  
//   }

// #########################

// let input = document.querySelector(".formInput")

// my_input_check = (event) => {
//     !'ABCDEFGabcdefg#'.includes(event.key) && event.preventDefault();
//     if (event.key === 'Enter') {
             
//     }                               
// }




let input = document.querySelector(".formInput")
input.addEventListener("input", function(){
    let regexpInput = /\d/g;
    if(regexpInput.test(input.data)){
        console.log("done")
    }
})


// let regexpInput = /[0-9]/g

// console.log(formInput.match())