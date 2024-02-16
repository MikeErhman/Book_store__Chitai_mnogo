let sandwich = document.getElementById("sandwich")
let sandwich_is_active = document.getElementById("sandwich_is_active")


    sandwich.addEventListener("click", function(){
        sandwich_is_active.classList.toggle("sandwich_wrapper")
    })
