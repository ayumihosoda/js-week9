
// 5. In JS, Change that element's background-color.

document.getElementsByClassName("class1")[0].style.backgroundColor = "green";

// 7. In JS: Create an h1 tag and then use innerText to add some text to it.
// create a h1 and store it in variable newText
var newText = document.createElement("h1")
// user innerText method and add the ""
newText.innerText = "Hello, I am going to add h1 here."

// 8. In JS: Add that h1 to the div in your HTML.
item.appendChild(newText)

// 10. In JS: Create an h1 element, create a text node. Add the text node to your h1, then add your h1 to your div.
// create a h1 and store it in variable called newElement
var newElement = document.createElement("h1")

// create text using textnode method and store in variable called text
var text = document.createTextNode("Let's create some text")

// add variable text to variable newElement
newElement.appendChild(text)

// get id="item2" and store it as variable addHere
var addHere = document.getElementById("item2")

// append the new div to the id addHere
addHere.appendChild(newElement)

// 12. In your JS: Create a function that changes the image source and alt attributes when you click on that button.
function changePicture() {
	var newImg = document.getElementById("picture");

	newImg.src = "images/picnew.jpeg"
	newImg.alt = "Tennis court"
}


