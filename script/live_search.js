document.querySelector('#elastic').oninput = function(){
    let val =  this.value.trim();
    let eclastic_items = document.querySelectorAll(".elastic li");
    if(val != ''){
        eclastic_items.forEach(function(elem){
            if(elem.innerText.search(val) != -1 && elem.innerText != ''){
                elem.classList.remove("hide");
    
            }
            else {
                elem.classList.add("hide");

            }
        });
    }
    else{
        eclastic_items.forEach(function (elem){ 
            elem.classList.add("hide")
            
        })
        }
           
    }