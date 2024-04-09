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
  projectDescription.innerHTML="I'm currently working on this website for a client in Kansas City who runs a cozy barbershop. I've created versions using both Wordpress and a custom design with HTML, CSS, Bootstrap, and JavaScript.";
  projectLink.href="https://lukaby-eric.github.io/vick/";
}
function rankfuse() {
  projectImage.src="../assets/images/rankk.png";
  projectTitle.innerHTML="Rank Fuse";
  projectDescription.innerHTML="I came across a digital marketing website with a design that I absolutely loved, so I decided to challenge myself and recreate it using my front-end development skills. I built its landing page from the ground up using HTML, CSS, Bootstrap, and JavaScript.";
  projectLink.href="https://lukaby-eric.github.io/rank-fuse/";
}
function wineclub() {
  projectImage.src="../assets/images/win.png";
  projectTitle.innerHTML="Louie's Wine Club";
  projectDescription.innerHTML="I collaborated with Martina Elena web design company to develop a website for a client who owns a large wine shop in Overland Park, KS and Des Moines, IA. The site was designed using HTML, CSS, JavaScript, and Bootstrap.";
  projectLink.href="https://lukaby-eric.github.io/wineClub/";
}
function mcm() {
  projectImage.src="../assets/images/mcmm.png";
  projectTitle.innerHTML="Martin City Marketing";
  projectDescription.innerHTML="I came across a digital marketing website with a design that I absolutely loved, so I decided to challenge myself and recreate it using my front-end development skills. I built its landing page from the ground up using HTML, CSS, Bootstrap, and JavaScript.";
  projectLink.href="https://lukaby-eric.github.io/mcm/";
}
function unity() {
  projectImage.src="../assets/images/unit.png";
  projectTitle.innerHTML="Unity Village";
  projectDescription.innerHTML="I came across a non profit business website with a design that I absolutely loved, so I decided to challenge myself and recreate it using my front-end development skills. I built its landing page from the ground up using HTML, CSS, Bootstrap, and JavaScript.";
  projectLink.href="https://lukaby-eric.github.io/unity/";
}
function flash() {
  projectImage.src="../assets/images/flashh.png";
  projectTitle.innerHTML="The Flash";
  projectDescription.innerHTML="I created this website as a fun project, drawing inspiration from the sleek and user-friendly design of Netflix's webpage. Intrigued by the idea, I chose to reimagine a landing page for one of my favorite shows at the time, ``The Flash`` Utilizing my skills in HTML, CSS, and JavaScript, I meticulously crafted each element to mirror the aesthetic and functionality of the streaming platform. From the layout to the interactive features, every detail was carefully considered to provide an engaging and immersive user experience. This project allowed me to not only showcase my technical abilities but also express my passion for design and creativity.";
  projectLink.href="https://lukaby-eric.github.io/netflix/";
}


AOS.init();
