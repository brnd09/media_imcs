function calcular_imc() {
    var terminou = false
    var pessoas_imc_maior30 = 0
    var totalpessoas = 0
    var somaIMCs = 0
    
while (terminou == false) {
    totalpessoas++
    var peso = parseFloat(prompt('Digite o seu peso'))
    var altura = parseFloat(prompt('Digite a sua altura'))
    var ver_imc = peso / altura ** 2;
    somaIMCs += ver_imc
    if(ver_imc > 30) pessoas_imc_maior30++
    alert('IMC da pessoa: ' + ver_imc.toFixed(2))
    var deseja_terminar = prompt('Deseja terminar? (s)im ou (n)ão')
    if(deseja_terminar == 'S' || deseja_terminar == 's'){
    terminou = true 
        var media_imc = (somaIMCs / totalpessoas).toFixed(2)
        alert(`Programa finalizado
                Quantidade de pessoas com IMC > 30: ${pessoas_imc_maior30}
                Quantidade de pessioas avaliadas: ${totalpessoas}
                Média dos IMCs: ${media_imc}
                `)
        }
    }
}

calcular_imc()
