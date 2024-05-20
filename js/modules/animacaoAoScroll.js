export default function animacaoAoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;
  
  function animaScroll(){
    sections.forEach((section)=>{
      const secaoTop = section.getBoundingClientRect().top;
      const secaoVisivel = (secaoTop - windowMetade) < 0;
      if(secaoVisivel){
        section.classList.add('ativo');
      }else if(section.classList.contains('ativo')){
        section.classList.remove('ativo');
      }
    })
  
  }

  window.addEventListener('scroll', animaScroll)
  
  animaScroll();
  }