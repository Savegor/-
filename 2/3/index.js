
(function () {
    const nav = document.querySelector(".nav")
    const burger = document.querySelector(".burger")
    burger.addEventListener("click", () => {
        console.log("click")
        burger.classList.toggle("burger__active")
        nav.classList.toggle("nav_active")
    })
}());

(function () {
    const header = document.querySelector(".header")
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= 300){
            header.classList.add("header-active")
            console.log(scrollPosition)
        }else{
            header.classList.remove("header-active")
        }
    })
}());

function arrow_func(number){
    const location_arrow = document.getElementById("location-arrow" + String(number))
    location_arrow.classList.toggle("arrow-active")
}

(function () {
    const box__play_icon = document.querySelector(".box__play-icon")
    const close_btn = document.querySelector(".close-video__box")
    const box__video = document.querySelector(".box-video");
    box__play_icon.addEventListener('click', () => {
        box__video.classList.add("video-active")
    })
    close_btn.addEventListener('click', () => {
        box__video.classList.remove("video-active")
    })
}());


