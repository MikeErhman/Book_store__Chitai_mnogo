








var about_book_desk = document.getElementById("about_book-id-desk")
var about_book = document.getElementById("about_book-id");
var about_book_div_desk = document.getElementById("about_book_div-desk")
var about_book_div = document.getElementById("about_book_div")
var quotes_desk = document.getElementById("quotes-id-desk")
var quotes = document.getElementById("quotes-id");
var quotes_book_div_desk = document.getElementById("quotes_div-desk")
var quotes_div = document.getElementById("quotes_div")
var notes_desk = document.getElementById("notes-id-desk")
var notes = document.getElementById("notes-id");
var notes_div_desk = document.getElementById("notes_div-desk")
var notes_div = document.getElementById("notes_div")
var book_description = document.getElementById("title_descript-id");
var book_description_text = document.getElementById("text_descript-id");
var naw_square = document.getElementById("naw_sqre-id")
var naw_square_desk = document.getElementById("naw_sqre-id_desk")

// about_book.classList.add("display")
// book_description.classList.add("display")
// naw_square.classList.remove('naw_sqre')
// naw_square.classList.add("naw_sqre_right")

console.log(about_book.classList)
console.log(book_description.classList)
console.log("SQRE " + naw_square.classList)



var buttons = [about_book, quotes, notes];
var buttons_desk = [about_book_desk, quotes_desk, notes_desk];



function define_button(button){
	naw_square.classList.remove('"'+butt+'"')
	button.classList.add("")
}




buttons_desk.forEach(function(button){
	button.addEventListener('click', function(){
		console.log(button +" _desk is click")
		switch(true){
			case button.id == "about_book-id-desk" : if(naw_square.className != "naw_sqre-left"){
				console.log("if accepted - left")
				toggle_divs_desk(button); 
				naw_square.className = "naw_sqre-left"
			};break
			case button.id == "quotes_div-desk" : if(naw_square.className != "naw_sqre-center"){
				console.log("if accepted - center")
				toggle_divs_desk(button); 
				naw_square.className = "naw_sqre-center"
			};break
			case button.id == "notes-id-desk" : if(naw_square.className != "naw_sqre-right"){
				console.log("if accepted - right")
				toggle_divs_desk(button);
				naw_square.className = "naw_sqre-right"
			};break
		}
	})

	function toggle_divs_desk(div){
		switch(true){
			case div.id == "about_book-id-desk" : if (naw_square_desk.className != "naw_sqre-left"){ 
				console.log("left");
				notes_div_desk.className = "inactive";
				quotes_book_div_desk.className = "inactive";
				about_book_div_desk.className = "about_book-active";
		};break
			case div.id == "quotes-id-desk" : if(naw_square_desk.className != "naw_sqre-center"){
				console.log("center");
				about_book_div_desk.className = "inactive"; 
				notes_div_desk.className = "inactive";
				quotes_book_div_desk.className = "quotes_book_div-active" 
		}; break
			case div.id == "notes-id-desk" : if(naw_square_desk.className != "naw_sqre-right"){
				console.log("right");
				about_book_div_desk.className = "inactive";
				quotes_book_div_desk.className = "inactive";
				notes_div_desk.className = "notes_div";
		}; break

		}
	}
})


buttons.forEach(function(button){
	button.addEventListener('click', function(){
		console.log(button + " is click")
		switch(true){
			case button.id == "about_book-id" : if(naw_square.className != "naw_sqre-left") {
				console.log("if accepted")
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
				console.log("left");
				notes_div.className = "inactive";
				quotes_div.className = "inactive";
				about_book_div.className = "about_book-active";
		};break
			case div.id == "quotes-id"  : if(naw_square.className != "naw_sqre-center" && naw_square_desk.className != "naw_sqre-center"){
				console.log("center");
				about_book_div.className = "inactive"; 
				notes_div.className = "inactive";
				quotes_div.className = "quotes_book_div-active"
		}; break
			case div.id == "notes-id" || "notes-id-desk" : if(naw_square.className != "naw_sqre-right" && naw_square_desk.className != "naw_sqre-right"){
				console.log("right");
				about_book_div.className = "inactive";
				quotes_div.className = "inactive";
				notes_div.className = "notes_div"
		}; break

		}
	}
})