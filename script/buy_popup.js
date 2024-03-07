

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

    let buyType_card = document.querySelector("#buyType_card"),
    buyTupe_sberPay = document.querySelector("#buyTupe_sberPay"),
    buyTupe_payPal = document.querySelector("#buyTupe_payPal"),
    buyTupe_youMoney = document.querySelector("#buyTupe_youMoney"),
    buyTupe_other = document.querySelector("#buyTupe_other")
    // const = popupPayment_buyType = document.querySelector(".popupPayment_buyType")

    const arrayBuyType = [
        buyType_card,
        buyTupe_sberPay,
        buyTupe_payPal,
        buyTupe_youMoney,
        buyTupe_other
    ]

function addClassRemove(click){
    // console.log()
    
    arrayBuyType.forEach((elem) => {elem.classList.remove("active-buyType") });
    click.target.classList.add("active-buyType")
}

popupPayment_buyType.addEventListener('click', function(click){
    // console.log()
    switch(true){
        case click.target == buyType_card: 
            console.log(click); 
            addClassRemove(click);
            break;
        case click.target == buyTupe_sberPay:
            console.log("card")
            addClassRemove(click);
             break;
        case click.target == buyTupe_payPal :
             console.log("payPal"); 

             addClassRemove(click);
             break;
        case click.target == buyTupe_youMoney:
             console.log("youMoney"); 
             addClassRemove(click);
             break;
        case click.target == buyTupe_other:
             console.log("other");
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



