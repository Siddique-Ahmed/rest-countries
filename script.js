let countryName = document.querySelector("#saerch_country");
// #################### get span for put data ##################### \\
let country_name = document.querySelector("#name");
let capital = document.querySelector("#capital");
let continent = document.querySelector("#continent");
let fifa = document.querySelector("#fifa");
let currency = document.querySelector("#currency");
let lang = document.querySelector("#lang");
let pupulation = document.querySelector("#pupulation");
let startOfWeek = document.querySelector("#sow");
let area = document.querySelector("#area");
let img = document.querySelector("#flag_img");
let detail_box = document.querySelector(".country_details")
let loader = document.querySelector(".loader")

function getData(name) {
  if (name === "") {
    alert("please enter country name");
    return;
  } else {
    loader.style.display = "flex";
    detail_box.style.display = "none";
    setTimeout( async() => {
      loader.style.display = "none";
      detail_box.style.display = "flex";
      let data = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      let jsonData = await data.json();
      console.log(jsonData);
      country_name.textContent = `${jsonData[0].name.common}`;
      capital.textContent = `${jsonData[0].capital}`;
      continent.textContent = `${jsonData[0].continents}`;
      fifa.textContent = `${jsonData[0].fifa}`;
      currency.textContent = `${
        jsonData[0].currencies[Object.keys(jsonData[0].currencies)].name
      }`;
      lang.textContent = Object.values(jsonData[0].languages)
        .toString()
        .split(",")
        .join(",");
      pupulation.textContent = jsonData[0].population;
      startOfWeek.textContent = jsonData[0].startOfWeek;
      area.textContent = jsonData[0].area;
      img.src = jsonData[0].flags.svg;
      document.querySelector("#saerch_country").value = "";
    }, 1200);
  }
}

let saerch_btn = document.querySelector("#search_btn");

saerch_btn.addEventListener("click", () => {
  getData(countryName.value.trim());
});
