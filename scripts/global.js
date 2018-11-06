var menuObject = document.querySelector(".dropdown-content");
var buttonObject = document.querySelector(".dropbtn");

var dropdownset = false;

function dropDownClick() {
  console.log(menuObject);
  console.log(buttonObject);
    if(!dropdownset) {
      menuObject.style.display = "block";
      dropdownset = true;
    } else {
      menuObject.style.display = "none";
      dropdownset = false;
    }
}
