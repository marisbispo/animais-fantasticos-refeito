import AbreFaq from './modules/abreFaq.js';
import ImagemEtexto from './modules/imagemEtexto.js';
import ScrollSuave from './modules/scrollSuave.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltips.js';
import DropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/animacaoAoScroll.js';


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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();


initMenuMobile();
initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://www.blockchain.com/ticker', '.btc-preco');