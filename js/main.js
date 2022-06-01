// temp city counrty wind comment

// let btn = document.querySelector(".main__button");

function exploreHandler(city) {
    try {
        link = `https://api.weatherapi.com/v1/current.json?key=f22b48abdd4943b2af6165250211510&q=${city}&aqi=no`;

        const request = new XMLHttpRequest();
        request.open("GET", link, false);
        request.send();
        let data = JSON.parse(request.responseText);
        console.log(data);

        document.querySelector(".weather__country").innerHTML =
            data.location.country;

        document.querySelector(".weather__city").innerHTML = data.location.name;

        let temp = Math.round(data.current.temp_c);
        document.querySelector(".weather__temp").innerHTML = temp;

        document.querySelector(".weather__comment").innerHTML =
            data.current.condition.text;

        document.querySelector(".wind__speed").innerHTML =
            data.current.wind_kph;

        let path = getImageNumber(data.current.condition.icon);

        document.querySelector(".weather__icon").setAttribute("src", path);

        localStorage.setItem("city", city);
    } catch {
        alert("Incorrect city name!");
    }
}

function getImageNumber(image_link) {
    let parts = image_link.split("/");
    let name = parts[parts.length - 1];
    console.log(name);
    let path = `./img/icons/${name}`;
    return path;
}
