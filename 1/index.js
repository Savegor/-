
var burger = document.getElementById("burger__lines")
var search__input = document.getElementById("search__input")
var navbar = document.getElementById("header__nav")
var input1 = document.getElementById("search__input__item")

function active_burger(){
    burger.classList.toggle("active")
    navbar.classList.toggle("active")
}

function active_search(){
    search__input.classList.toggle("active")
}

function search_clear_btn(){
    input1.value = ""
}