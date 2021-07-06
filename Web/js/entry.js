// mouseenter시 EntryImage 회전
const card = document.querySelector(".card");
const EntryImage = document.querySelector(".EntryImage img");
const title = document.querySelector(".title");
const EntryTitle = document.querySelector(".EntryTitle");
const sizes = document.querySelector(".sizes");

card.addEventListener("mousemove", function (e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 60;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener("mouseenter", function (e) {
    card.style.transition = "none";
    title.style.transform = "translateZ(100px)";
    EntryTitle.style.transform = "translateZ(70px)";
    sizes.style.transform = "translateZ(50px)";
});

card.addEventListener("mouseleave", function (e) {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    title.style.transform = "translateZ(0px)";
    EntryTitle.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});

card.addEventListener("mouseenter", (e) => {
    EntryImage.style.transform = "rotateZ(-45deg) translateZ(150px)";
});

card.addEventListener("mouseleave", (e) => {
    EntryImage.style.transform = "rotateZ(0deg) translateZ(0px)";
});

function ClickTitle1(t, o) {
    var o = document.getElementById(o);
    o.innerHTML = t;
}

function ClickTitle2(t, o) {
    var o = document.getElementById(o);
    o.innerHTML = t;
}

function dbl_click(href) {
    location.href = href;
}
