var btnGenera = document.getElementById("btn-genera");
var btnAnnulla = document.getElementById("btn-annulla");

btnGenera.addEventListener("click", function () {
  document.getElementById("biglietto").style.display = "block";
  var offer = "Tariffa Standard";
  // Selezionare valore input
  var fullNameInput = document.getElementById("full-name");
  var kmInput = document.getElementById("km");
  var fasciaInput = document.getElementById("fascia");
  // Seleziona i valori
  var fullName = fullNameInput.value;
  var km = kmInput.value;
  var fascia = fasciaInput.value;

  //Calcolo biglietto treno
  var costPerKm = 0.21;
  var ticketPrice = costPerKm * km;

  if (fascia == "minorenne") {
    offer = "Sconto Minorenne";
    ticketPrice = ticketPrice * 0.8;
  } else if (fascia == "over65") {
    offer = "Sconto Silver";
    ticketPrice = ticketPrice * 0.6;
  }

  document.getElementById("nameDetail").innerHTML = fullName;
  document.getElementById("scontoDetail").innerHTML = offer;
  document.getElementById("carrozzaDetail").innerHTML =
    Math.floor(Math.random() * 9) + 1;
  document.getElementById("codiceDetail").innerHTML =
    Math.floor(Math.random() * 9999) + 90000;
  document.getElementById("costoDetail").innerHTML =
    ticketPrice.toFixed(2) + "€";
});

btnAnnulla.addEventListener("click", function () {
  //Annulla operazione
  document.getElementById("biglietto").style.display = "none";
  document.getElementById("full-name").value = "";
  document.getElementById("km").value = "";
  document.getElementById("fascia").value = "";
});
