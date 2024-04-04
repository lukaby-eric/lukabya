window.onscroll = function() {myFunction()};

const navbar = document.getElementById("navbar");
const navbarLinks = document.getElementById("nav-links");

const clickMe = document.getElementById("clickMe");
const lookingJobs = document.getElementById("looking-jobs");

var projectImage = document.getElementById("proj-image");
var projectTitle = document.getElementById("proj-title");
var projectDescription = document.getElementById("proj-descript");
var projectLink = document.getElementById("proj-link");

function myFunction() {
  if (window.pageYOffset >= 300) {
    navbar.style.background="linear-gradient(-90deg, white,#ffffffe9)";
    navbarLinks.style.background="linear-gradient(-90deg, white,#ffffffe9)";
  } else {
    navbar.style.background="linear-gradient(-90deg, teal,rgba(0, 128, 128, 0.762))";
    navbarLinks.style.background="linear-gradient(-90deg, teal,rgba(0, 128, 128, 0.762))";
  }
}

function openJobs() {
  lookingJobs.style.transform="scale(1,1)";
}
function closeJobs() {
  lookingJobs.style.transform="scale(0,0)";
}


function vicklines() {
  projectImage.src="../assets/images/vic.png";
  projectTitle.innerHTML="Vicklines Barbershop";
  projectDescription.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat saepe nemo culpa enim quae, ratione delectus doloremque voluptas nisi aut cum laborum obcaecati magnam veritatis nam ea dolore. Accusantium";
  projectLink.href="https://lukaby-eric.github.io/vick/";
}
function rankfuse() {
  projectImage.src="../assets/images/rankk.png";
  projectTitle.innerHTML="Rank Fuse";
  projectDescription.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat saepe nemo culpa enim quae, ratione delectus doloremque voluptas nisi aut cum laborum obcaecati magnam veritatis nam ea dolore. Accusantium";
  projectLink.href="https://lukaby-eric.github.io/rank-fuse/";
}
function wineclub() {
  projectImage.src="../assets/images/win.png";
  projectTitle.innerHTML="Louie's Wine Club";
  projectDescription.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat saepe nemo culpa enim quae, ratione delectus doloremque voluptas nisi aut cum laborum obcaecati magnam veritatis nam ea dolore. Accusantium";
  projectLink.href="https://lukaby-eric.github.io/wineClub/";
}
function mcm() {
  projectImage.src="../assets/images/mcmm.png";
  projectTitle.innerHTML="Martin City Marketing";
  projectDescription.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat saepe nemo culpa enim quae, ratione delectus doloremque voluptas nisi aut cum laborum obcaecati magnam veritatis nam ea dolore. Accusantium";
  projectLink.href="https://lukaby-eric.github.io/mcm/";
}
function unity() {
  projectImage.src="../assets/images/unit.png";
  projectTitle.innerHTML="Unity Village";
  projectDescription.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat saepe nemo culpa enim quae, ratione delectus doloremque voluptas nisi aut cum laborum obcaecati magnam veritatis nam ea dolore. Accusantium";
  projectLink.href="https://lukaby-eric.github.io/unity/";
}
function flash() {
  projectImage.src="../assets/images/flashh.png";
  projectTitle.innerHTML="The Flash";
  projectDescription.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat saepe nemo culpa enim quae, ratione delectus doloremque voluptas nisi aut cum laborum obcaecati magnam veritatis nam ea dolore. Accusantium";
  projectLink.href="https://lukaby-eric.github.io/netflix/";
}


AOS.init();