function calcular(tipo, valor){
    let display = document.getElementById("display")
    if (tipo === 'numeral') {
        display.value += valor
    } else if (tipo === 'funcao'){
        if (valor === "c"){
            display.value = ""
        } else if (valor === "="){
            let resultado = eval(display.value)
            display.value = resultado
        } else if (valor === "."){
            if(display.value.indexOf(".") === -1){
                if(display.value.length == 0){
                    display.value += 0
                    display.value += valor
                } else {
                    display.value += valor
                }
            } else {
                let ponto = display.value.lastIndexOf(".")
                let soma = display.value.lastIndexOf("+")
                let subtracao = display.value.lastIndexOf("-")
                let multiplicacao = display.value.lastIndexOf("*")
                let divisao = display.value.lastIndexOf("/")
                let max = Math.max(soma, subtracao, multiplicacao, divisao)
                if(ponto < max){
                    if(max == display.value.length){
                        display.value += 0
                        display.value += valor
                    } else {
                        display.value += valor
                    }
                } else {
                    alert("Ação inválida, o número já possui (.)")
                }
            }
        } else {
            display.value += valor
        }
    }
}

function zerarOnload(){
    let display = document.getElementById("display")
    display.value = ""
}