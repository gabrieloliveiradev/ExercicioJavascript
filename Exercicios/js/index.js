function atualizaNome(){
    var nome = prompt("Digite seu nome: ")
    var texto =  document.getElementById('nome')
    texto.innerHTML = `Olá, ${nome}, como vai?`
}
function adicionaTexto () {
    var caixa = document.getElementById('caixa')
    var textArea = document.createElement('textArea')
    caixa.appendChild(textArea)
}
function abrirPopUp () {
    var popUp = document.getElementById('popup')
    modal.style.display = "block"
    
}
function fecharPopUp() {

}
function humor () {
    var input = document.getElementById('humor').value
    console.log(input)
    var resposta = document.getElementById('mensagem-humor')
    if(input == 1) {
        resposta.innerHTML = "Parabéns seu humor ta excelente"
    }
    if(input == 2) {
        resposta.innerHTML = "Humor ta ok, sorriso ta OK"
    }
    if(input == 3) {
        resposta.innerHTML = "Não chora bb :'("
    }
}
function tabuada1(){
    var num = Number(prompt("Digite qual tabuada deseja fazer"))
    var i = 1
    var pMae = document.getElementById("tabuada1")
    console.log(pMae)
    while(i<=10){
        p = document.createElement("p")
        pMae.appendChild(p)
        resultado = i*num
        p.innerHTML = num + " X " + i + " = " + resultado 
        i++
    }
}
function tabuada2 () {
    var num = Number(prompt("Digite qual tabuada deseja fazer"))
    var i = 1
    var pMae = document.getElementById("tabuada2")
    console.log(pMae)
    do {
        p = document.createElement("p")
        pMae.appendChild(p)
        resultado = i*num
        p.textContent = num + " X " + i + " = " + resultado 
        i++
    }
    while (i<10)
}
