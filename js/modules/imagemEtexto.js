export default function imagemEtexto(){

const texto = document.querySelectorAll('[data-tab="content"] section');
const imagens = document.querySelectorAll('[data-tab="menu"] li');

function mostraTexto(index){
  texto.forEach((textinho)=>{
    textinho.classList.remove('ativo');
  })
  const direcao = texto[index].dataset.anime;
  texto[index].classList.add('ativo', direcao);
}

if(texto.length && imagens.length){
texto[0].classList.add('ativo');
imagens.forEach((imagem, index)=>{
  imagem.addEventListener('click', function(){
    mostraTexto(index);
  })
})

}



}

