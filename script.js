const countriesContainer = document.querySelector(".countries");

//////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/brazil");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = ` <article class="country">
  <img src="${data.flag}" alt="flag" class="country-img" />
  <div class="country-data">
    <h3 class="country-name">${data.name}</h3>
    <h4 class="country-region">${data.region}</h4>
    <p class="country-population">${(+data.population / 1000000).toFixed(1)}</p>
    <p class="country-language">${data.languages[0].name}</p>
    <p class="country-currency">${data.currencies[0].code}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
});
