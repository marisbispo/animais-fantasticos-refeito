export default class ImagemEtexto{
  constructor(imagens, texto){
    this.imagens = document.querySelectorAll(imagens);
    this.texto = document.querySelectorAll(texto);
    this.activeClass = 'ativo';
  }


// Ativa a tab de acordo com o index da mesma
mostraTexto(index){
  this.texto.forEach((textinho)=>{
    textinho.classList.remove(this.activeClass);
  })
  const direcao = this.texto[index].dataset.anime;
  this.texto[index].classList.add(this.activeClass, direcao);
}

// adiciona os eventos nas tabs
addTabNavEvent(){
  this.imagens.forEach((imagem, index)=>{
    imagem.addEventListener('click', () => this.mostraTexto(index));
  });
}

init(){
  if(this.texto.length && this.imagens.length){
    // ativar primeiro item
    this.mostraTexto(0);
    this.addTabNavEvent();
  }
}

}

