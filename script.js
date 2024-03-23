let conta = 0
let pessoas = 0
let porcentagem = 0 

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(event) {
     conta = Number(event.target.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(event) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(event.target.value === "0") {    
        paragrafoErro.styles.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.styles.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(event.target.value)
    }
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao=>{
    botao.addEventListener("click",)
})

function receberPorcentagem(event) {
    
}