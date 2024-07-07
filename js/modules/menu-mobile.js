import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events){
     this.menuButton = document.querySelector('[data-menu="button"]');
     this.menuList = document.querySelector('[data-menu="list"]');
     this.activeClass = 'active';
    

    // define o evento padrão caso o usuário
    // não passe nenhum evento
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    // quando tem um evento de callback 
    // tem que dar o bind
    this.openMenu = this.openMenu.bind(this);
  }

 
  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    })
  }

  addMenuMobileEvents() {
    this.events.forEach(evento => {
      this.menuButton.addEventListener(evento, this.openMenu);
    })
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }



}

