export default function scrollSuave(){

const links = document.querySelectorAll('[data-menu="suave"] [href^="#"]');
  
  function irAsessao(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior:'smooth',
      block: 'start',
    });
  }

  links.forEach(link=>{
    link.addEventListener("click", irAsessao)
  })
  
  }
  
