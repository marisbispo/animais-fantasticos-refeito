
export default function abreFaq(){

  const listaPerguntas = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function abrePergunta(pergunta){
    pergunta.classList.toggle(activeClass);
    pergunta.nextElementSibling.classList.toggle(activeClass);
  }
  
  if (listaPerguntas.length){
  listaPerguntas[0].classList.add(activeClass);
  listaPerguntas[0].nextElementSibling.classList.add(activeClass);
  
  listaPerguntas.forEach(pergunta=>{
    pergunta.addEventListener('click', function(){
      abrePergunta(pergunta);
    })
  })
  }
}

  