const dropdown = document.querySelector(".dropdown-button"); 
const dropdownMenu= document.querySelector(".dropdown-menu"); 

console.log(dropdown);

dropdown.addEventListener("click", function(){
	dropdownMenu.classList.toggle("dropdown-opened");
})