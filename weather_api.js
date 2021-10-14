const wrapper = document.querySelector(".main-content"),
  inputPart = document.querySelector(".location"),
  inputField = inputPart.querySelector("input"),
  weatherPart = wrapper.querySelector(".main-weather"),
  wIcon = weatherPart.querySelector("i"),
  loader = document.querySelector(".loader-zindex"),
  apiKey = "5473ad825f3b7eb73a38a48403559d47";

inputField.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
});

function requestApi(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  loader.classList.add("show");
  setTimeout(function () {
    loader.classList.remove("show");
  }, 500);
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  if (info.cod == "404") {
  }
  console.log(info);
}
