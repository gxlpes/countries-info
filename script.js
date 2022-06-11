const countriesContainer = document.querySelector(".countries");

//////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/brazil");
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = ` <!-- <article class="country">
  <img src="" alt="" class="country-img" />
  <div class="country-data">
    <h3 class="country-name"></h3>
    <h4 class="country-region"></h4>
    <p class="country-population"></p>
    <p class="country-language"></p>
    <p class="country-currency"></p>
  </div>
</article>`;
});
