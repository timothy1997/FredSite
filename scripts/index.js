$( document ).ready(function() {
  console.log("Fading In...")
  $(document.querySelector("#main-image")).fadeIn(700);
  $(document.querySelector("nav")).fadeIn(1400);
});

let mainImage = document.querySelector("#main-image");
let mainMessage = document.querySelector("#main-image-tag");
let interval = setInterval(changeImage, 8000);

let images = ["linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/home/timothy/Documents/CS Website/images/atom-rails.jpg')",
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/home/timothy/Documents/CS Website/images/computers.jpg')",
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/home/timothy/Documents/CS Website/images/people.jpg')"]

let tags = ["Fredonia Computer Science Club",
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

function navigateAway(value) {
  console.log(value.innerHTML);
  if (value.innerHTML.includes("image1")) {
    console.log("Clicked Image 1");
    window.location.href = 'webpages/news.htm';
  } else if(value.innerHTML.includes("image2")) {
    console.log("Clicked Image 2");
    window.location.href = 'webpages/contact.htm';
  } else if(value.innerHTML.includes("image3")) {
    console.log("Clicked Image 3");
    window.location.href = 'webpages/members.htm';
  } else {
    console.log("Clicked Image 4");
    window.location.href = 'webpages/about.htm';
  }
}
