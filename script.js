var imageElement = document.getElementById("header_image");
var c = 0;

imageElement.addEventListener("click", function () {
  if (c == 0) {
    document.body.style.backgroundColor = "#F19CBB";
    c++;
  } else {
    document.body.style.backgroundColor = "#343434";
    c--;
  }
});
let namex = document.querySelector("#name_wala");
let all_name = [
  "Sudhanshu Shekahr",
  "Problem Solver",
  "Web Developer",
  "Tech Enthusiast",
];
let i = 0;
function changeName() {
  if (i < all_name.length) {
    namex.innerHTML = all_name[i];
    i++;
    if (i >= all_name.length) {
      i = 0;
    }

    setTimeout(changeName, 1200); // Delay of 1.5 seconds (1500 milliseconds)
  }
}
// about me functionanlity
var abt = document.querySelector("#about_me");
var close = document.querySelector("#close");
close.addEventListener("click", function () {
  var dis = document.querySelector(".about_container");
  if (dis.style.display == "none") {
    dis.style.display = "block";
  } else {
    dis.style.display = "none";
  }
});
abt.addEventListener("click", function () {
  var dis = document.querySelector(".about_container");
  if (dis.style.display == "block") {
    dis.style.display = "none";
  } else {
    dis.style.display = "block";
  }
});

//iner circle click event
let cpp = document.querySelector("#cpp");
cpp.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "CPP";
  document.querySelector("#c1p1").textContent =
    "This is my primary programming language which I use. This is the 1st language which I have learnt way back in school. I have more than 4 years of experiece in this language. " +
    "I have completed my Data Structures and Algoritms using this language and regularly solve leet code problems using this language ";
  document.querySelector("#rocket").src = "";
});
let htmlX = document.querySelector("#htmlX");
htmlX.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "HTML-5";
  document.querySelector("#c1p1").textContent = "yup its working";
  document.querySelector("#rocket").src = "";
});
let css3 = document.querySelector("#css3");
css3.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "css3";
  document.querySelector("#c1p1").textContent = "yup its working2";
  document.querySelector("#rocket").src = "";
});
let js_ = document.querySelector("#java_script");
js_.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "javascript";
  document.querySelector("#c1p1").textContent = "yup its working3";
  document.querySelector("#rocket").src = "";
});
let react = document.querySelector("#reactx");
react.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "react";
  document.querySelector("#c1p1").textContent = "yup its working4";
  document.querySelector("#rocket").src = "";
});
//outer circle click event
let github = document.querySelector("#github");
github.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "Git Hub";
  document.querySelector("#c1p1").textContent = "yup its working5";
  document.querySelector("#rocket").src = "";
});
let git = document.querySelector("#git");
git.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "GIT";
  document.querySelector("#c1p1").textContent = "yup its working6";
  document.querySelector("#rocket").src = "";
});
let py = document.querySelector("#python");
py.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "Python";
  document.querySelector("#c1p1").textContent = "yup its working7";
  document.querySelector("#rocket").src = "";
});
let leetcode = document.querySelector("#leetcode");
leetcode.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "leetcode";
  document.querySelector("#c1p1").textContent = "yup its working8";
  document.querySelector("#rocket").src = "";
}); //
//to retrive the card history
let his = document.querySelector("#history");
his.addEventListener("click", function () {
  document.querySelector("#c1s1").textContent = "Want To Know More?";
  document.querySelector("#c1p1").textContent =
    "Click on the individual item in the skill ring to know more.";
  document.querySelector("#rocket").src = "image (1).png";
}); //
changeName();
const feedbackx = document.querySelector(".feedback");
feedbackx.addEventListener("click", function (event) {
  const ele1 = document.querySelector(".feedback2");
  const ele2 = document.querySelector(".feedback3");
  const ele3 = document.querySelector(".feedback4");
  if (ele1.style.display === "none") {
    ele1.style.display = "block";
  } else {
    ele1.style.display = "none";
  }
  if (ele2.style.display === "none") {
    ele2.style.display = "block";
  } else {
    ele2.style.display = "none";
  }
  if (ele3.style.display === "none") {
    ele3.style.display = "block";
  } else {
    ele3.style.display = "none";
  }

  event.stopPropagation(); // very imp functionn
});
document.body.addEventListener("click", function () {
  const ele1 = document.querySelector(".feedback2");
  const ele2 = document.querySelector(".feedback3");
  const ele3 = document.querySelector(".feedback4");
  if (ele1.style.display === "block" && ele2.style.display === "block") {
    ele1.style.display = "none";
    ele2.style.display = "none";
    ele3.style.display = "none";
  }
});
///writing the gsap animations
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
gsap.from(".work1", {
  scrollTrigger: {
    trigger: ".work1",
    toggleActions: "play none reverse reset",
    scrub: true,
    end: "+=650",
  },
  duration: 0.1,
  x: -100,
  opacity: 0,
});
gsap.from(".work2", {
  scrollTrigger: {
    trigger: ".work2",
    toggleActions: "play none reverse reset",
    scrub: true,
    end: "+=650",
  },
  x: 100,
  opacity: 0,
});

gsap.from(".work3", {
  scrollTrigger: {
    trigger: ".work3",
    toggleActions: "play none reverse reset",
    scrub: true,
    end: "+=650",
  },
  duration: 0.1,
  x: -100,
  opacity: 0,
});
gsap.from(".work4", {
  scrollTrigger: {
    trigger: ".work4",
    toggleActions: "play none reverse reset",
    scrub: true,
    end: "+=650",
  },
  duration: 0.1,
  x: 100,
  opacity: 0,
});

gsap.from(".work5_leetcode", {
  scrollTrigger: {
    trigger: ".work5_leetcode",
    toggleActions: "play none reverse reset",
    scrub: true,
    end: "+=450",
  },
  duration: 0.1,
  y: 400,
  opacity: 0,
});
