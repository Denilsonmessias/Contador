function contar() {
    var inicio = document.getElementById('txti') // variável inicio
    var fim = document.getElementById('txtf') //variável fim
    var passo = document.getElementById('txtp') //variável passo
    let res = document.getElementById('res') //variável resultado
    let i = Number(inicio.value) //transforma em valor
    let f = Number(fim.value) //transforma string em valor
    let p = Number(passo.value) //transforma string em valor

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados.') //se valores não forem colocados apresenta erro por falta de dados
    } else {
        res.innerHTML = 'Contando:' // mensagem do resultado

        //contagem crescente usando "do while" (repetição)
      if (i < f) {
        let c = i
        do { 
            res.innerHTML += `${c} \u{27A1} `// apresenta resultado concatenada a mensagem anterior "+" \u = emoji
            c+=p
            } while (c<=f)
      }  else {
          //contagem decrescente usando "for" (repetição)
          for(let c = i; c >= f; c -= p) {
              res.innerHTML += `${c} \u{27A1}` 
          }
      }       res.innerHTML += `\u{1F51A}` 
    } 
}