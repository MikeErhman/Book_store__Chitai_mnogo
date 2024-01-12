
document.querySelector('#elastic_mob').oninput = function(){
    // let val =  this.value.trim();
    // let eclastic_items = document.querySelectorAll(".elastic li");
    // let elastic_items_mob = document.querySelectorAll(".elastic_mob li")
    // if(val != ''){
    //     elastic_items_mob.forEach(function(elem){
    //         if(elem.innerText.search(val) != -1 && elem.innerText != ''){
    //             elem.classList.remove("hide");
    
    //         }
    //         else {
    //             elem.classList.add("hide");

    //         }
    //     });
    //     eclastic_items.forEach(function(elem){
    //         if(elem.innerText.search(val) != -1 && elem.innerText != ''){
    //             elem.classList.remove("hide");
    
    //         }
    //         else {
    //             elem.classList.add("hide");

    //         }
    //     });
    // }
    // else{
    //     eclastic_items.forEach(function (elem){ 
    //         elem.classList.add("hide")
            
    //     })
    //     }
           
    
        let val =  this.value.trim();
        let eclastic_items = document.querySelectorAll(".elastic li");
        let elastic_items_mob = document.querySelectorAll(".eclastic_items_mob li")
    function elasticSearch(elasticContent){
        
        if(val != ''){
            elasticContent.forEach(function(elem){
                if(elem.innerText.search(val) != -1 && elem.innerText != ''){
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
elasticSearch(elastic_items_mob);
elasticSearch(eclastic_items);

}


var inp_text = document.querySelector('#text')
var inp_butt = document.querySelector("#inp_butt")
var butt_icon = document.querySelector(".srch__icon")
var logo_search_buttons = document.querySelector( ".logo_search_buttons")
var text_wide = document.querySelector("#elastic")
let text_wide_mob = document.querySelector("#elastic_mob")
var inp_butt_wide = document.querySelector(".inp_butt_wide")
var body = document.querySelector("body")


body.addEventListener("click", function(click){
    console.log(click)
    if(click.target.id == "text" ){
        console.log("input click");
        logo_search_buttons.style.display = ("none")
        text_wide_mob.style.display = ("block")
        inp_butt_wide.style.display = ("block")
    }
    else if(click.target.id !== "elastic_mob" && click.target.id !== "inp_butt_wide"){
        logo_search_buttons.style.display = ("flex")
        text_wide_mob.style.display = ("none")
        inp_butt_wide.style.display = ("none")
        }
        
    }
)


