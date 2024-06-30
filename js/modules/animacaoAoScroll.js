export default class ScrollAnima{
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section)=>{
      const secaoTop = section.getBoundingClientRect().top;
      const secaoVisivel = (secaoTop - this.windowMetade) < 0;
      if(secaoVisivel){
        section.classList.add('ativo');
      }else if(section.classList.contains('ativo')){
        section.classList.remove('ativo');
      }
    })
  
  }

  init() {
    this.animaScroll();
    window.addEventListener('scroll', this.animaScroll);
  }
  
  }
