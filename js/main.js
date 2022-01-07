// const { set } = require("express/lib/response");

document.querySelector("h1").innerText = "موقع أجزاء القرآن الكر يم";
document.title.innerText = "موقع أجزاء القرآن الكر يم";

/*=============================================
=            Side section            =
=============================================*/

let side = document.querySelector(".side"),
    openSide = document.querySelector("#open"),
    closeSide = document.querySelector("#close"),
    sideOverlay = document.querySelector(".sideOverlay"),
    open2 = document.querySelector(".top-openside button:first-of-type");

function open_side() {
    side.classList.add("opened");
    sideOverlay.classList.add("block");
    sideOverlay.classList.remove("none");
    document.body.style.overflowY = "hidden";
    // document.querySelector(".icon-rotate").style.transform = "rotateX(180deg)"
}

function close_side() {
    side.classList.remove("opened");
    sideOverlay.classList.add("none");
    sideOverlay.classList.remove("block");
    document.body.style.overflowY = "visible";
    // document.querySelector(".icon-rotate").style.transform = "rotateX(360deg)";
}

openSide.addEventListener("click", function() {
    open_side()
})
closeSide.addEventListener("click", function() {
    close_side()
})

open2.addEventListener("click", function() {
    open_side()
})

/*=====  End of Side section  ======*/

// Remove Attributes [width,height] from Iframes

let iframes = document.querySelectorAll("article iframe");

iframes.forEach(function(ele) {
    ele.removeAttribute("width")
    ele.removeAttribute("height")
    ele.removeAttribute("title")
})





function goToTop() {
    window.scrollTo(0, 0);
}
// document.querySelectorAll(".description iframe").forEach(function(ind) {
//     ind.setAttribute("height", parseFloat(ind.getAttribute("width") * 2))
// })

document.querySelectorAll(".options option").forEach(function(ind) {
    ind.value = ind.innerHTML;
})

window.onload = function() {
    document.querySelector(".loading").style.display = "none";
}


// console.log(document.querySelector(".loading"));

if (location.href.includes("pages/")) {
    for (let index = 1; index <= 30; index++) {

        let ele = document.createElement("a");
        let li = document.createElement("li");
        ele.href = `${index}.php`;
        li.appendChild(document.createTextNode(`الجزء ${index}`))
        ele.appendChild(li);
        document.querySelector("menu").appendChild(ele);
        // console.log("fffff");
    }
} else /*if (location.href.includes("index.php")) */ {

    for (let index = 1; index <= 30; index++) {
        // const element = index;
        let ele = document.createElement("a");
        let li = document.createElement("li");
        ele.href = `pages/${index}.php`;
        li.appendChild(document.createTextNode(`الجزء ${index}`))
        ele.appendChild(li);
        document.querySelector("menu").appendChild(ele);
        // console.log("fffff");
    }
}
// console.log(location.href /*.includes("index.php")*/ );

let html = document.querySelector("html");
html.setAttribute("dir", "rtl");
html.setAttribute("lang", "ar");

// $("body").css("display", "flex")

function submit() {
    location.replace("index.php");
    setTimeout(() => {
        document.querySelector(".yes").remove();
    }, 1000)

}