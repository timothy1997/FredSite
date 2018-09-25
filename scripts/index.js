let mainImage = document.querySelector("#main-image");
let mainMessage = document.querySelector("#main-image-tag");
let interval = setInterval(changeImage, 8000);

let images = ["linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/home/timothy/Documents/CS Website/images/atom-rails.jpg')",
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/home/timothy/Documents/CS Website/images/computers.jpg')",
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/home/timothy/Documents/CS Website/images/people.jpg')"]

let tags = ["Computer Science Club: A Chance to Explore Computer Science.",
            "Test Your Skills in Coding Competitions",
            "Work on Fun Projects with your Peers!"]

let currentImage = 0;

function changeImage(back=false) {
  if(back) {
    if(currentImage != 0) {
      currentImage--;
    } else {
      currentImage = 2;
    }
  } else {
    if (currentImage != 2) {
      currentImage++;
    } else {
      currentImage = 0;
    }
  }

  $(mainImage).fadeToggle("slow", function() {
  mainImage.style.background = images[currentImage];
  mainImage.style.backgroundSize = "cover";
  mainMessage.innerHTML = tags[currentImage];});
  $(mainImage).fadeToggle("slow");
}
