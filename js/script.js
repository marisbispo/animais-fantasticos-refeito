import AbreFaq from './modules/abreFaq.js';
import ImagemEtexto from './modules/imagemEtexto.js';
import ScrollSuave from './modules/scrollSuave.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltips.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/animacaoAoScroll.js';
import SlideNav from "./modules/slide.js";


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

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();



fetchAnimais('../../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://www.blockchain.com/ticker', '.btc-preco');

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();

slide.addControl('.custom-controls');

console.log(slide)