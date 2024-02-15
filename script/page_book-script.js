








const about_book_desk = document.getElementById("about_book-id-desk"),
about_book = document.getElementById("about_book-id"),
about_book_div_desk = document.getElementById("about_book_div-desk"),
about_book_div = document.getElementById("about_book_div"),
quotes_desk = document.getElementById("quotes-id-desk"),
quotes = document.getElementById("quotes-id"),
quotes_book_div_desk = document.getElementById("quotes_div-desk"),
quotes_div = document.getElementById("quotes_div"),
notes_desk = document.getElementById("notes-id-desk"),
notes = document.getElementById("notes-id"),
notes_div_desk = document.getElementById("notes_div-desk"),
notes_div = document.getElementById("notes_div"),
book_description = document.getElementById("title_descript-id"),
book_description_text = document.getElementById("text_descript-id"),
naw_square = document.getElementById("naw_sqre-id"),
naw_square_desk = document.getElementById("naw_sqre-id_desk");

const buttons = [about_book, quotes, notes],
buttons_desk = [about_book_desk, quotes_desk, notes_desk];



function define_button(button){
	naw_square.classList.remove('"'+butt+'"')
	button.classList.add("")
}




buttons_desk.forEach(function(button){
	button.addEventListener('click', function(){
		switch(true){
			case button.id == "about_book-id-desk" : if(naw_square_desk.className != "naw_sqre-left"){
				toggle_divs_desk(button); 
				naw_square_desk.className = "naw_sqre-left"
			};break
			case button.id == "quotes-id-desk" : if(naw_square_desk.className != "naw_sqre-center"){
				toggle_divs_desk(button); 
				naw_square_desk.className = "naw_sqre-center"
			};break
			case button.id == "notes-id-desk" : if(naw_square_desk.className != "naw_sqre-right"){
				toggle_divs_desk(button);
				naw_square_desk.className = "naw_sqre-right"
			};break
		}
	})

	function toggle_divs_desk(div){
		switch(true){
			case div.id == "about_book-id-desk" : if (naw_square_desk.className != "naw_sqre-left"){ 
				notes_div_desk.className = "inactive";
				quotes_book_div_desk.className = "inactive";
				about_book_div_desk.className = "about_book-active";
		};break
			case div.id == "quotes-id-desk" : if(naw_square_desk.className != "naw_sqre-center"){
				about_book_div_desk.className = "inactive"; 
				notes_div_desk.className = "inactive";
				quotes_book_div_desk.className = "quotes_book_div-active" 
		}; break
			case div.id == "notes-id-desk" : if(naw_square_desk.className != "naw_sqre-right"){
				about_book_div_desk.className = "inactive";
				quotes_book_div_desk.className = "inactive";
				notes_div_desk.className = "notes_div";
		}; break

		}
	}
})


buttons.forEach(function(button){
	button.addEventListener('click', function(){
		switch(true){
			case button.id == "about_book-id" : if(naw_square.className != "naw_sqre-left") {
				toggle_divs(button); 
				naw_square.className = "naw_sqre-left"
				
			};
				break
			case button.id == "quotes-id" : if(naw_square.className != "naw_sqre-center"){
				toggle_divs(button); 
				naw_square.className = "naw_sqre-center"
				
			};
				break
			case button.id == "notes-id" : if(naw_square.className != "naw_sqre-right"){
				toggle_divs(button);
				naw_square.className = "naw_sqre-right";
			};
				break
			
		}
	})
	function toggle_divs(div){
		switch(true){
			case div.id == "about_book-id" : if (naw_square.className != "naw_sqre-left"){ 
				notes_div.className = "inactive";
				quotes_div.className = "inactive";
				about_book_div.className = "about_book-active";
		};break
			case div.id == "quotes-id"  : if(naw_square.className != "naw_sqre-center" && naw_square_desk.className != "naw_sqre-center"){
				about_book_div.className = "inactive"; 
				notes_div.className = "inactive";
				quotes_div.className = "quotes_book_div-active"
		}; break
			case div.id == "notes-id" || "notes-id-desk" : if(naw_square.className != "naw_sqre-right" && naw_square_desk.className != "naw_sqre-right"){
				about_book_div.className = "inactive";
				quotes_div.className = "inactive";
				notes_div.className = "notes_div"
		}; break

		}
	}
})



const bookImage = document.querySelector("#book_image")
const bookTitle = document.querySelector("text_descript-id")