const countriesContainer = document.querySelector(".countries");

//////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/brazil"); // get data information from country
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText); // convert string to array containing object and destructure the array
  console.log(data);

  const html = `<article class="country">
  <img class="country-img" src="${data.flag}"/>
      <div class="country-data">
        <h3 class="country-name">${data.name}</h3>
        <h4 class="country-region">${data.region}</h4>
        <p class="country-row"><span>Population</span>${(+data.population / 10000000).toFixed(1)} people</p>
        <p class="country-row"<span><svg viewBox="0 0 512 512">
        <path d="m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362 368 281.65 401.17 362ZM267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"/>
      </svg></span>${data.languages[0].name}</p>
        <p class="country-row"<span>Currency</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
});
