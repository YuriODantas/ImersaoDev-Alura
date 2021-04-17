function converte() {
    let inputReal = document.getElementById("real");
    let inputDolar = document.getElementById("dolar");
    let inputEuro = document.getElementById("euro");
    let inputLibras = document.getElementById("libras");
    let inputBitcoin = document.getElementById("bitcoin");

    if (inputReal.value != "") {
        inputDolar.value = "USS " + (inputReal.value.replace(',','.') / coinValue.ForReal.dolar).toFixed(2).replace('.', ',');
        inputEuro.value = "EUR " + (inputReal.value.replace(',','.') / coinValue.ForReal.euro).toFixed(2).replace('.', ',');
        inputLibras.value = "GBP " + (inputReal.value.replace(',','.') / coinValue.ForReal.libras).toFixed(2).replace('.', ',');
        inputBitcoin.value = "XBT " + (inputReal.value.replace(',','.') / coinValue.ForReal.bitcoin).toFixed(7).replace('.', ',');
    } else if (inputDolar.value != "") {
        inputReal.value = "R$ " + (inputDolar.value.replace(',','.') / coinValue.ForDolar.real).toFixed(2).replace('.', ',');
        inputEuro.value = "EUR " + (inputDolar.value.replace(',','.') / coinValue.ForDolar.euro).toFixed(2).replace('.', ',');
        inputLibras.value = "GBP " + (inputDolar.value.replace(',','.') / coinValue.ForDolar.libras).toFixed(2).replace('.', ',');
        inputBitcoin.value = "XBT " + (inputDolar.value.replace(',','.') / coinValue.ForDolar.bitcoin).toFixed(7).replace('.', ',');
    } else if (inputEuro.value != "") {
        inputReal.value = "R$ " + (inputEuro.value.replace(',','.') / coinValue.ForEuro.real).toFixed(2).replace('.', ',');
        inputDolar.value = "USS " + (inputEuro.value.replace(',','.') / coinValue.ForEuro.dolar).toFixed(2).replace('.', ',');
        inputLibras.value = "GBP " + (inputEuro.value.replace(',','.') / coinValue.ForEuro.libras).toFixed(2).replace('.', ',');
        inputBitcoin.value = "XBT " + (inputEuro.value.replace(',','.') / coinValue.ForEuro.bitcoin).toFixed(7).replace('.', ',');
    } else if (inputLibras.value != "") {
        inputReal.value = "R$ " + (inputLibras.value.replace(',','.') / coinValue.ForLibras.real).toFixed(2).replace('.', ',');
        inputDolar.value = "USS " + (inputLibras.value.replace(',','.') / coinValue.ForLibras.dolar).toFixed(2).replace('.', ',');
        inputEuro.value = "EUR " + (inputLibras.value.replace(',','.') / coinValue.ForLibras.euro).toFixed(2).replace('.', ',');
        inputBitcoin.value = "XBT " + (inputLibras.value.replace(',','.') / coinValue.ForLibras.bitcoin).toFixed(7).replace('.', ',');
    } else if (inputBitcoin.value != "") {
        inputReal.value = "R$ " + (inputBitcoin.value.replace(',','.') / coinValue.ForBitcoin.real).toFixed(2).replace('.', ',');
        inputDolar.value = "USS " + (inputBitcoin.value.replace(',','.') / coinValue.ForBitcoin.dolar).toFixed(2).replace('.', ',');
        inputEuro.value = "EUR " + (inputBitcoin.value.replace(',','.') / coinValue.ForBitcoin.euro).toFixed(2).replace('.', ',');
        inputLibras.value = "GBP " + (inputBitcoin.value.replace(',','.') / coinValue.ForBitcoin.libras).toFixed(2).replace('.', ',');
    } else {
        alert("Preencha algum campo com valor para converter")
    }
}

function clearInput() {
    document.getElementById('real').value = ""
    document.getElementById('dolar').value = ""
    document.getElementById('euro').value = ""
    document.getElementById('libras').value = ""
    document.getElementById('bitcoin').value = ""
}