
let searchMob 

console.log(window.innerWidth);
window.addEventListener("click", function(click){
    let valueOfId = "#" + click.target.id 
function elastic(inputId){
document.querySelector(inputId).addEventListener("input", function(){
        let val =  this.value.trim(),
        elastic_items = document.querySelectorAll(".elastic li"),
        elastic_items_mob = document.querySelectorAll(".elastic_items_mob li");
        searchMob = elastic_items_mob
    function elasticSearch(elasticContent){
        if(val != ''){
            elasticContent.forEach(function(elem){
                if(elem.innerText.toLowerCase().search(val.toLowerCase()) != -1 && elem.innerText != ''){
                    elem.classList.remove("hide");
        
                }
                else {
                    elem.classList.add("hide");

                }
            });
        }
        else{
            elasticContent.forEach(function (elem){ 
                elem.classList.add("hide")
                
            })
        }
           
}

        if(window.innerWidth > 500){
            elasticSearch(elastic_items);
        }
        else{
            elasticSearch(elastic_items_mob);
        }
    })
    }   
elastic(String(valueOfId))
})


let inp_text = document.querySelector('#text'),
inp_butt = document.querySelector("#inp_butt"),
butt_icon = document.querySelector(".srch__icon"),
logo_search_buttons = document.querySelector( ".logo_search_buttons"),
text_wide = document.querySelector("#elastic"),
text_wide_mob = document.querySelector("#elastic_mob"),
inp_butt_wide = document.querySelector(".inp_butt_wide"),
body = document.querySelector("body");


body.addEventListener("click", function(click){
    if(click.target.id == "text" ){
        logo_search_buttons.style.display = ("none");
        text_wide_mob.style.display = ("block");
        inp_butt_wide.style.display = ("block");
    }
    else if(click.target.id !== "elastic_mob" && click.target.id !== "inp_butt_wide"){
        logo_search_buttons.style.display = ("flex");
        text_wide_mob.style.display = ("none");
        inp_butt_wide.style.display = ("none");
        if(searchMob !== undefined) {
            searchMob.forEach(function(items){
            items.className = ("hide")
        })
    }
        }
        
    }
)


