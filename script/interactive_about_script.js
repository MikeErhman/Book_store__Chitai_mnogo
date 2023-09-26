var about_book = document.getElementById("about_book-id");
var about_book_div =document.getElementById("about_book_div")
var quotes = document.getElementById("quotes-id");
var quotes_div = document.getElementById("quotes_div")
var notes = document.getElementById("notes-id");
var notes_div = document.getElementById("notes_div")
var book_description = document.getElementById("title_descript-id");
var book_description_text = document.getElementById("text_descript-id");
var naw_square = document.getElementById("naw_sqre-id")

// about_book.classList.add("display")
// book_description.classList.add("display")
// naw_square.classList.remove('naw_sqre')
// naw_square.classList.add("naw_sqre_right")

console.log(about_book.classList)
console.log(book_description.classList)
console.log("SQRE " + naw_square.classList)


var buttons = [about_book, quotes, notes]

function define_button(button){
	naw_square.classList.remove('"'+butt+'"')
	button.classList.add("")
}

function toggle_divs(div){
	switch(true){
	case div.id == "quotes-id" : if(naw_square.className != "naw_sqre-center"){about_book_div,notes_div.classList = "inactive";
	 quotes_div.classList = "quotes_book_div-active" }; break
	case div.id == "notes-id" : if(naw_square.className != "naw_sqre-right"){}

	}

}

buttons.forEach(function(button){
	button.addEventListener('click', function(){
		console.log(button + " is click")
		switch(true){
			case button.id == "about_book-id" : if(naw_square.className != "about_book") {
				naw_square.className = "naw_sqre-left"};break
			case button.id == "quotes-id" : if(naw_square.className != "naw_sqre-center"){
				toggle_divs(button); naw_square.className = "naw_sqre-center"; };break
			case button.id == "notes-id" : if(naw_square.className != "naw_sqre-right"){
				naw_square.className = "naw_sqre-right"};break
			
		}
	})

})

// about_book.addEventListener("click", function(){
// 	naw_square.classList.remove()
// 	naw_square.classList.add("naw_sqre")
// 	console.log(naw_square.classList)
// })
// quotes.addEventListener("click", function(){
// 	naw_square.classList.remove()
// 	naw_square.classList.add("naw_sqre-center")
// 	console.log(naw_square.classList)
// })
// notes.addEventListener("click", function(){
// 	naw_square.classList.remove();
// 	naw_square.classList.add("naw_sqre-right");
// })