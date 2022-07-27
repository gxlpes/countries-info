function debounce(callback, wait) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

const countriesContainer = document.querySelector(".countries");
const submitBtn = document.querySelector("button");
const p = document.createElement("p");
const textNode = document.createTextNode("Check your country spelling!");
const field = document.querySelector(".field");

////////////////////////////////////////////////////////////////////
// render the country request
const renderCountry = function (data) {
  const html = `<article class="country">
    <img class="country-img" src="${data.flag}"/>
      <div class="country-data">
        <h3 class="country-name">${data.name} </h3>
        <h4 class="country-region">${data.region}</h4>

        <div class="misc">

        <p class="country-row"><span><svg viewBox="0 0 24 24">
        <path d="M.221 16.268a15.064 15.064 0 0 0 1.789 1.9C2.008 18.111 2 18.057 2 18a5.029 5.029 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.784A2.968 2.968 0 0 1 4 9a2.988 2.988 0 0 1 5.022-2.2 5.951 5.951 0 0 1 2.022-.715 4.994 4.994 0 1 0-7.913 6.085 7.07 7.07 0 0 0-2.91 4.098zm23.558 0a7.07 7.07 0 0 0-2.91-4.1 4.994 4.994 0 1 0-7.913-6.086 5.949 5.949 0 0 1 2.022.715 2.993 2.993 0 1 1 3.614 4.74 1 1 0 0 0 .175 1.784A5.029 5.029 0 0 1 22 18c0 .057-.008.111-.01.167a15.065 15.065 0 0 0 1.789-1.899z"/>
        <path d="M18.954 20.284a7.051 7.051 0 0 0-3.085-5.114A4.956 4.956 0 0 0 17 12a5 5 0 1 0-8.869 3.17 7.051 7.051 0 0 0-3.085 5.114 14.923 14.923 0 0 0 1.968.849C7.012 21.088 7 21.046 7 21a5.031 5.031 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.785A2.964 2.964 0 0 1 9 12a3 3 0 1 1 6 0 2.964 2.964 0 0 1-1.408 2.537 1 1 0 0 0 .175 1.785A5.031 5.031 0 0 1 17 21c0 .046-.012.088-.013.133a14.919 14.919 0 0 0 1.967-.849z"/>
        </svg></span>${(+data.population / 10000000).toFixed(1)}M people</p>

        <p class="country-row"<span><svg viewBox="0 0 512 512">
        <path d="m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362 368 281.65 401.17 362ZM267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"/>
        </svg></span>${data.languages[0].name}</p>

        <p class="country-row"<span><svg viewBox="0 0 209.869 209.869" style="enable-background:new 0 0 209.869 209.869" xml:space="preserve">
        <path d="M186.143 37.684H47.186c-13.084 0-23.726 9.734-23.726 21.7v1.902C10.5 61.421 0 71.091 0 82.973v67.511c0 11.966 10.644 21.7 23.726 21.7h138.957c13.082 0 23.726-9.734 23.726-21.7v-1.902c12.957-.132 23.46-9.802 23.46-21.687v-67.51c.003-11.966-10.644-21.701-23.726-21.701zm-14.948 112.8c0 3.515-3.896 6.482-8.509 6.482H23.729c-4.613 0-8.509-2.967-8.509-6.482v-67.51c0-3.513 3.898-6.482 8.509-6.482h138.957c4.613 0 8.509 2.97 8.509 6.482v67.51zm15.217-17.128V82.973c0-11.966-10.644-21.7-23.726-21.7H38.677v-1.889c0-3.513 3.898-6.482 8.509-6.482h138.957c4.613 0 8.509 2.97 8.509 6.482v67.511h.003c-.001 3.444-3.751 6.347-8.243 6.461z"/>
        <path d="M93.479 111.028c-6.404-.763-9.655-1.676-9.655-4.558 0-4.464 6.462-4.946 9.242-4.946 4.091 0 8.615 1.978 10.089 4.41l.586.971 9.346-4.324-.571-1.164c-3.289-6.718-9.12-8.747-13.622-9.572V85.9H87.962v5.914c-9.627 1.499-15.336 6.921-15.336 14.654 0 12.724 11.935 14.058 19.825 14.943 7.172.847 10.515 2.569 10.515 5.417 0 5.509-7.781 5.937-10.168 5.937-5.351 0-10.505-2.65-11.986-6.168l-.495-1.169-10.14 4.296.5 1.169c2.853 6.68 8.968 10.893 17.282 11.943v6.409H98.89v-6.729c7.979-.984 15.666-6.087 15.666-15.691.003-13.197-12.68-14.76-21.077-15.797z"/>
        </svg></span>${data.currencies[0].name}</p>
        </div>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

////////////////////////////////////////////////////////////////////
// AJAX call country
const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`); // get data information from country
  request.send();
  request.onloadend = function () {
    if (request.status == 404) {
      p.classList.add("alert");
      p.appendChild(textNode);
      document.body.appendChild(p);
    } else {
      field.style.marginTop = "5rem";
      const [data] = JSON.parse(this.responseText); // convert string to array containing object and destructure the array
      p.remove();
      // render country
      renderCountry(data);
    }
  };
};

////////////////////////////////////////////////////////////////////
// event listeners to call main function
document.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    const inputText = document.getElementById("search").value;

    if (inputText === inputText) {
      alert("haha");
    }

    if (countriesContainer.firstChild) {
      countriesContainer.removeChild(countriesContainer.lastElementChild);
      getCountry(inputText);
    } else {
      getCountry(inputText);
    }
  }
});

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener(
  "click",
  debounce(() => {
    const inputText = document.getElementById("search").value;
    if (countriesContainer.firstChild) {
      countriesContainer.removeChild(countriesContainer.lastElementChild);
      getCountry(inputText);
    } else {
      getCountry(inputText);
    }
  }),
  5000
);

////////////////////////////////////////////////////////////////////
// check userinput is blank
const inputText = document.getElementById("search");
document.addEventListener("keyup", function (event) {
  const article = document.querySelector(".country");
  if (event.code === "Delete" && inputText.value.length == 0) {
    field.style.marginTop = "20rem";
    article.style.opacity = "0";
  }
  if (event.code === "Backspace" && inputText.value.length == 0) {
    field.style.marginTop = "20rem";
    article.style.opacity = "0";
  }
});
