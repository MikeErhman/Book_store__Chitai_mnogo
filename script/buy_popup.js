

body.addEventListener("click", function(click){
    const popupClick = document.querySelector(".buyClick");
const popup = document.querySelector(".popupShadow");
    if(click.target.className == "btn_buy" ){
    popup.style.display = ("block")
}else if(click.target.className == "popupShadow"){
    popup.style.display = ("none")
}
 })

 const popupPayment = document.querySelector(".popupPayment")
popupPayment.addEventListener("click", function(click){
    let buyType_card = document.querySelector("#buyType_card"),
    buyTupe_sberPay = document.querySelector("#buyTupe_sberPay"),
    buyTupe_payPal = document.querySelector("#buyTupe_payPal"),
    buyTupe_youMoney = document.querySelector("#buyTupe_youMoney"),
    buyTupe_other = document.querySelector("#buyTupe_other")

    const arrayBuyType = [
        buyType_card,
        buyTupe_sberPay,
        buyTupe_payPal,
        buyTupe_youMoney,
        buyTupe_other
    ]

    console.log(click.target)
    switch(true){
        case click.target == buyType_card || buyType_card.firstChild: console.log("Card"); break;
        case click.target == buyTupe_sberPay: console.log("sberPay"); break;
        case click.target == buyTupe_payPal: console.log("payPal"); break;
        case click.target == buyTupe_youMoney: console.log("youMoney"); break;
        case click.target == buyTupe_other: console.log("other"); break;
    }
})


    



const popupImage = document.querySelector("#book_image"),
bookImageMain = document.querySelector(".main_book_images"),
popupNameBook = document.querySelector("#popupNameBook"),
popupTitleBook = document.querySelector("#popupTitleBook"),
titleOfBbook = document.querySelector(".title_of_book"),
textDescript = document.querySelector("#text_descript-id");

// console.log(popupNameBook.innerHTML)

popupNameBook.innerHTML = titleOfBbook.innerHTML;
popupTitleBook.innerHTML = textDescript.innerHTML;
popupImage.attributes[0].nodeValue = bookImageMain.attributes[0].nodeValue;



