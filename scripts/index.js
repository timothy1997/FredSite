let mainImage = document.querySelector("#main-image");
let mainMessage = document.querySelector("#main-image-tag");
let interval = setInterval(changeImage, 8000);

let images = ["url('/home/timothy/Documents/CS Website/images/atom-rails.jpg')",
              "url('/home/timothy/Documents/CS Website/images/computers.jpg')",
              "url('/home/timothy/Documents/CS Website/images/people.jpg')"]

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
  mainImage.style.backgroundImage = images[currentImage];
  mainMessage.innerHTML = tags[currentImage];});
  $(mainImage).fadeToggle("slow");
}
