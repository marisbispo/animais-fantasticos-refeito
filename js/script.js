import abreFaq from './modules/abreFaq.js';
import imagemEtexto from './modules/imagemEtexto.js';
import ScrollSuave from './modules/scrollSuave.js';
import animacaoAoScroll from './modules/animacaoAoScroll.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/initFetchAnimais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] [href^="#"]')
scrollSuave.init();

imagemEtexto();
abreFaq();
animacaoAoScroll();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();