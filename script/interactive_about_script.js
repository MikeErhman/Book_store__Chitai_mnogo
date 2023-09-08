var about_book = document.getElementById("about_book-id");
var quotes = document.getElementById("quotes-id");
var notes = document.getElementById("notes-id");
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

buttons.forEach(function(button){
	button.addEventListener('click', function(){
		console.log(button + " is click")
		switch(true){
			case button.id == "about_book-id" : if(naw_square.className != "naw_sqre") {
				naw_square.className = "naw_sqre"};break
			case button.id == "quotes-id" : if(naw_square.className != "naw_sqre-center"){
				naw_square.className = "naw_sqre-center"};break
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