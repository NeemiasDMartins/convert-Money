const btn = document.querySelector("#btn")
const select_coin = document.querySelector(".currency-select")
const coin_convert = document.querySelector("#coin_convert")
const imgCoins = document.querySelector("#moedas")
const nameCoin = document.querySelector("#name_coin")


function btn_converter() {

    convert_value = document.querySelector("#input").value
    const valueDollar = 4.97
    const valueEuro = 5.37
    const valueLibra = 6.28
    const valueBitcoin = 213.359
    const p_moedas_real = document.querySelector("#p-moedas")

    p_moedas_real.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(convert_value)

    if (select_coin.value == "dolar") {
        coin_convert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convert_value / valueDollar)
    }

    if (select_coin.value == "euro") {
        coin_convert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convert_value / valueEuro)

    }

    if (select_coin.value == "libra") {
        coin_convert.innerHTML = new Intl.NumberFormat("en-BG", {
            style: "currency",
            currency: "GBP"
        }).format(convert_value / valueLibra)
    }

    if(select_coin.value == "bitcoin"){
        coin_convert.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency:"USD"
        }).format(convert_value / valueBitcoin)
    }
}

function changeCoin() {


    if (select_coin.value == "euro") {
        nameCoin.innerHTML = "Euro"
        imgCoins.src = "./assets/euro.jpg"
    }

    if (select_coin.value == "dolar") {
        nameCoin.innerHTML = "Dolar"
        imgCoins.src = "./assets/dollar.png"
    }

    if (select_coin.value == "libra"){
        nameCoin.innerHTML = "Libra"
        imgCoins.src = "./assets/libra.png"
    }

    if(select_coin.value == "bitcoin"){
        nameCoin.innerHTML = "Bitcoin"
        imgCoins.srs="./assets/bitcoin.png"
    }

    btn_converter()

}

select_coin.addEventListener("change", changeCoin)

btn.addEventListener("click", btn_converter)


