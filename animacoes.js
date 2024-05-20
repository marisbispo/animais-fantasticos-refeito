function abreFaq(){

const listaPerguntas = document.querySelectorAll('[data-anime="accordion"] dt');
console.log(listaPerguntas[0])
listaPerguntas[0].classList.add('ativo');
listaPerguntas[0].nextElementSibling.classList.add('ativo');

listaPerguntas.forEach(pergunta=>{
  pergunta.addEventListener('click', function(){
    abrePergunta(pergunta);
  })
})



function abrePergunta(pergunta){
  pergunta.classList.toggle('ativo');
  pergunta.nextElementSibling.classList.toggle('ativo');
}

}

abreFaq();


function imagemEtexto(){

const texto = document.querySelectorAll('[data-tab="content"] section');
const imagens = document.querySelectorAll('[data-tab="menu"] li');
texto[0].classList.add('ativo');

imagens.forEach((imagem, index)=>{
  imagem.addEventListener('click', function(){
    mostraTexto(index);
  })
})

function mostraTexto(index){
  texto.forEach((textinho)=>{
    textinho.classList.remove('ativo');
  })
  const direcao = texto[index].dataset.anime;
  texto[index].classList.add('ativo', direcao);
}

}

imagemEtexto();

function irProLink(){

const links = document.querySelectorAll('[data-menu="suave"] [href^="#"]');
links.forEach(link=>{
  link.addEventListener("click", irAsessao)
})

function irAsessao(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior:'smooth',
    block: 'start',
  });
}

}

irProLink();


const sections = document.querySelectorAll('[data-anime="scroll"]');
const windowMetade = window.innerHeight * 0.6;
window.addEventListener('scroll', animaScroll)

function animaScroll(){
  sections.forEach((section)=>{
    const secaoTop = section.getBoundingClientRect().top;
    const secaoVisivel = (secaoTop - windowMetade) < 0;
    if(secaoVisivel){
      section.classList.add('ativo');
    }else{
      section.classList.remove('ativo');
    }
  })

}

animaScroll();