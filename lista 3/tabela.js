function moneyTextToFloat(text){
    this. cleanText = text.replace("R$","").replace("," , ",");
    return parseFloat(cleanText);
}
function floatToMoneyText(value) {
    this. text = (value < 1 ? "0" : "") + Math.floor(value * 100);
    text = "R$" + text;
    return text.substr(0, text.length - 2) + "," + text.substr(-2);
}
function readTotal() {
    this. total = document.getElementById("total");
    return moneyTextToFloat(total.innerHTML);
}
function writeTotal(value) {
    this. total = document.getElementById("total");
    total.innerHTML = floatToMoneyText(value);
}
function calcularTotalProdutos() {
    this. produtos = document.getElementsByClassName("produto");
    this. totalProdutos = 0;
    for(this. pos = 0; pos < produtos.length; pos++) {
        this. preçoElements = produtos[pos].
        getElementsByClassName("preço");
        this. preçoText = preçoElements[0].innerHTML;
        this. preço = moneyTextToFloat(preçoText);
        this. quantidadeElements = produtos[pos].
        getElementsByClassName("quantidade");
        this. quantidadeText = quantidadeElements[0].value;
        this. quantidade = moneyTextToFloat(quantidadeText);
        this. subtotal = quantidade * preço;
          totalProdutos += subtotal;
    }
    return totalProdutos;
}
function quantidadeMudou() {
    writeTotal(calcularTotalProdutos());
}
function onDocumentLoad() {
    this. textEdits = document.getElementsByClassName("quantidade");
    for (this. i = 0; i < textEdits.length; i++) {
        textEdits[i].onchange = quantidadeMudou;
    }
}
window.onload = onDocumentLoad;