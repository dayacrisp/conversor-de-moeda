const convertButton = document.querySelector(".convert-button") /*mapiei meu botão*/
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.17

    
    if(currencySelect.value == 'dolar') { 
        //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if(currencySelect.value == 'euro') {
        //Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    if(currencySelect.value == 'libra') {
        //Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
   

    /*innerHTML e innerText são basicamente a mesma coisa, representam o texto visível dentro do elemento. Diferenças: innerHTML dá pra usar tags html e no innerTexte não. */

    console.log (convertedValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Britânica'
        currencyImage.src = './assets/libra.jpg'
    }

    convertValues()
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues ) /*quando o botão for clicado ele vai chamar a função*/


