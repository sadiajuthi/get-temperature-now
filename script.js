const API_key = `041ea0e74fae5927a2abb6bfdd2525d2`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}


const displayTemp = (temp) => {
    console.log(temp)

    const maindiv = document.getElementById('maindiv')
    maindiv.textContent = '';


    const div = document.createElement('div')
    div.innerHTML = `<img id="weather-icon" src="https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png" alt="">
    <h1 id="city">${temp.name}</h1>
    <h3><span id="temperature">${temp.main.temp}</span>&deg;C</h3>
    <h1 id="condition" class="lead">${temp.weather[0].main}</h1>`
    maindiv.appendChild(div)

}
