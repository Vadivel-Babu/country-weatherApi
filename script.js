const URL = "https://restcountries.com/v3.1/all";
const div = document.querySelector('.row');

fetch(URL)
 .then((data) => data.json())
 .then((el) => {
  for (let i = 0; i < el.length; i++) {
    div.innerHTML += `<div class="card ">
        <div class="card-header">
          ${el[i].name.common}
        </div>
        <img src=${el[i].flags.png} alt="alt" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Capital: ${el[i].capital}</h5>
          <h5 class="card-title">Region: ${el[i].region}</h5>
          <h5 class="card-title">Latlng: ${el[i].latlng}</h5>
          <h5 class="card-title">code: ${el[i].flag}</h5>
        </div>
        <button class="btn btn-primary" onclick="weather(event)">
          click for weather
        </button>
      </div>`

  }
  
 })

 function weather(e){
  // getting latitude AND longitude value by dom drilling
  let val = e.target.previousElementSibling.children[2].innerText.split(':')[1].split(',');
  let lat = +val[0];
  let lon = +val[1];
  let key = '50c50ef8e4e9c2258bd386e59a6d8d48';
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
   .then((data) => data.json()).then((res) =>{
    console.log(res);
    alert(`The weather is ${res.weather[0].main} in ${res.name}`)
   })

 }

