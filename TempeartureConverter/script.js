const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

function cellTofar() {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
}

function farTocell() {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
  console.log(celsius.value);
}
