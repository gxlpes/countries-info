const countriesContainer = document.querySelector(".countries");

//////////////////////////////////

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/name/brazil");
request.send();
