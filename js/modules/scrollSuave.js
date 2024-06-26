export default class scrollSuave{
  constructor(links, options){
    this.links = document.querySelectorAll(links);
    if(options === undefined){
      this.options = { behavior:'smooth', block: 'start'};
    }else{
      this.options = options;
    }

    this.irAsessao = this.irAsessao.bind(this);
  }

  
irAsessao(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent(){
    this.links.forEach(link=>{
      link.addEventListener("click", this.irAsessao)
    });
  }

  init(){
    if(this.links.length){
    this.addLinkEvent();
    }
    return this;
  }


  }
  
