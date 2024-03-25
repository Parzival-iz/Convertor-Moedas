const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.01;
    const euroToday = 5.43;
    const libraToday = 6.36;
    const bitcoinToday = 337.150;

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    } else if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    } else if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    } else if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImage.src = "./assets/USA.png";
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/Euro.png";
    } else if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/Bitcoin.png";
    } else if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/Libra.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
