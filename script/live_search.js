document.querySelector('#elastic').oninput = function(){
    let val =  this.value.trim();
    let eclastic_items = document.querySelectorAll(".elastic li");
    if(val != ''){
        eclastic_items.forEach(function(elem){
            if(elem.innerText.search(val) == -1){
                elem.classList.add("hide");
                elem.innerHTML = elem.innerText
            }
            else {
                elem.classList.remove("hide");
                let str = elem.innerText
                elem.innerHTML = insert_mark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else{
        eclastic_items.forEach(function (elem){ 
            elem.classList.remove("hide")
            elem.innerHTML = elem.innerText
        })
        }
           
    }


    function insert_mark(string, pos, len){
        // hello world
        // hello<mark> wo </mark>rld
        //hello + <mark> + wo + </mark> + rld
        return string.slice(0, pos) + "<mark>" + string.slice(pos, pos + len) + "</mark>" + string.slice(pos+len);
    }
