function criarcartão(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.getElementsByClassName ='cartao'
    cartao.innerHTML =`
    <div class="cartao__conteudo'>
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>$pergunta</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                    <p>O CSS é uma linguagem de estilização</p>
                    </div>
                </div>`
           
}