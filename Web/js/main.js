// mouseenter시 EntryImage 회전
const card = document.querySelector(".card");
const EntryImage = document.querySelector(".EntryImage img");

card.addEventListener("mouseenter", (e) => {
    EntryImage.style.transform = "rotateZ(-45deg)";
});

card.addEventListener("mouseleave", (e) => {
    EntryImage.style.transform = "rotateZ(0deg)";
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
