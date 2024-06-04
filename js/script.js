import AbreFaq from './modules/abreFaq.js';
import ImagemEtexto from './modules/imagemEtexto.js';
import ScrollSuave from './modules/scrollSuave.js';
import animacaoAoScroll from './modules/animacaoAoScroll.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltips.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/initFetchAnimais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] [href^="#"]')
scrollSuave.init();

const accordion = new AbreFaq('[data-anime="accordion"] dt');
accordion.init();


const tabNav = new ImagemEtexto('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

animacaoAoScroll();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();