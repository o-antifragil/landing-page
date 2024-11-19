/* 

1 - Quando clicar na seta para avançar, temos que esconder todas as imagens e mostrar a proxima imagem:
   
2 - a imagem atual começa no 0 porque é a primeira imagem
   assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagem para poder saber que agora eu vou mostrar a segunda imagem.

3 - esconder todas as imagens
       pegar todas as imagens usando o DOM e remover a classe mostrar
    
4 - mostrar a proxima imagem
       pegar todas as imagens e descobrir qual é a proxima, e colcoar a dclasse mostrar nela

*/

/* Quando clicar na seta para avançar, temos que esconder todas as imagens e mostrar a proxima imagem: */

const imagens = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){    
    imagens[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++        
    }

    esconderImagens()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
    }

    esconderImagens()
    mostrarImagem()
})





