let main_block = document.querySelector(".main");
let weather_block = document.querySelector(".weather");
let explore_btn = document.querySelector(".main__button");
let input = document.querySelector(".main__input");

// main_block.style.display = "none";
// weather_block.style.display = "flex";

let city = localStorage.getItem("city");

if (city != null) {
    exploreHandler(city);
    main_block.style.display = "none";
    weather_block.style.display = "flex";
} else {
    explore_btn.addEventListener("click", () => {
        city = input.value;
        exploreHandler(city);
        main_block.style.display = "none";
        weather_block.style.display = "flex";
    });
}
