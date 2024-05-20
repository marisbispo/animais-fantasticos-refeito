
export default class AbreFaq{
  constructor(list){
    this.listaPerguntas = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

 // const listaPerguntas = document.querySelectorAll('[data-anime="accordion"] dt');
  

abrePergunta(pergunta){
    pergunta.classList.toggle(this.activeClass);
    pergunta.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent(){
    this.listaPerguntas.forEach(pergunta=>{
      pergunta.addEventListener('click', () => this.abrePergunta(pergunta))
    });
  }

  // iniciar função
  init(){
    if(this.listaPerguntas.length){
      // ativar primeiro item
      this.abrePergunta(this.listaPerguntas[0])
      this.addAccordionEvent();
    }
  }
  
}

  