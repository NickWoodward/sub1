import View from '../View';
import config from /* preval */ '../../../../tailwind.config';
const { theme: { extend: { colors: { primary } } } } = config;

import { gsap } from 'gsap';

export default class Header extends View {
  _elementName = 'header';
  _parentElement;
  _currentElement;
  _menu;
  _menuTL;
  _lines;
  _mobileItems;
  _items;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} fixed flex items-center justify-center w-full h-header bg-slate-700 shadow-2xl cursor-pointer z-40">
        <div class=" px-4 xxs:px-8 flex justify-between items-center w-full max-w-largest">
          <div class="logo relative border-l-2 border-primary pl-3 text-white text-3xl tracking-tighter uppercase">Sub<span class="text-primary ml-2">1</span></div>
        
          <!-- Mobile Burger -->
          <div class="burger relative sm:hidden flex flex-col justify-between w-8 h-5 cursor-pointer">
            <div class="line w-full h-[2px] bg-slate-500"></div>
            <div class="line w-full h-[2px] bg-slate-500"></div>
            <div class="line w-full h-[2px] bg-slate-500"></div>

            <div class="line-wrapper absolute top-0 left-0 flex items-center h-full w-full">
              <div class="line hidden w-full h-[2px] bg-slate-500"></div>
            </div>
          </div>

          <!-- Mobile Nav -->
          <div class="menu--mobile hidden absolute inset-x-0 top-header z-10 origin-top-right transform  transition">
            <div class="flex flex-col items-end overflow-hidden">
              
                <a href="#" id="concept-mobile-item" class="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary">Concept</a>

                <a href="#" id="opportunity-mobile-item" class="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary">Opportunity</a>

                <a href="#" id="contact-mobile-item" class="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary ">Contact Us</a>

                <!--<a href="#" id="login-mobile-item" class="mobile-menu__item block w-[120%]  bg-slate-700 border-t-2 border-slate-500 px-8 py-3 text-right font-medium text-slate-300 hover:text-primary">Log in</a>-->
            </div>
          </div>


          <div class="hidden xs:ml-6 sm:block">
            <div class="flex space-x-4">
              ${this._data.navItems.map(item => this._renderNavItem(item)).join('')}; 
            </div>
          </div>
          </div>
        </div>
      </div>
    `;

    return markup;
  }

  _render(parentString) {
    this._setParentElement(parentString);
    super._render();
    // this._animateIn();
    this._initElements();
  }
    _renderNavItem(item) {
    let lowerCase = item.toLowerCase().replaceAll(' ', '');
    const capitalize = item.charAt(0) + item.slice(1);
    
    lowerCase = lowerCase === 'ourvision'? 'opportunity': lowerCase;
    lowerCase = lowerCase === 'about'? 'concept': lowerCase;


    return `<a href="#" id="${lowerCase}-item" class="menu__item  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-primary hover:rounded-md hover:text-white">${capitalize}</a>`;
  }

  _setParentElement(parentString) {
    this._parentElement = document.querySelector(`.${parentString}`);
  }
  _initElements() {
    this._currentElement = this._parentElement.querySelector(`.${this._elementName}`);
    this._menu = this._parentElement.querySelector('.menu--mobile');
    this._lines = Array.from(document.querySelectorAll('.burger .line'));
    this._mobileItems = Array.from(document.querySelectorAll('.mobile-menu__item'));
    this._items = Array.from(document.querySelectorAll('.menu__item'));

    this._menuTl = gsap.timeline({paused:true});
    this._menuTl
      .add(this._getBurgerTl())
      .add(this._getMenuContentTl(), '<');

  }

  setActiveItem(element) {
    console.log(element);
    if(typeof element === 'string') {
      [...this._mobileItems, ...this._items].forEach(item => {
        if(item.id.includes(element)){
          item.classList.add('border-b', 'border-primary', 'text-primary');
        } else {
          item.classList.remove('border-b', 'border-primary', 'text-primary');
        }
      });
    } else {
      [...this._mobileItems, ...this._items].forEach(item => {
        if(item === element){
          item.classList.add('border-b', 'border-primary', 'text-primary');
        } else {
          item.classList.remove('border-b', 'border-primary', 'text-primary');
        }
      });
    }
  }

  addMenuHandler(handler) {
    this._currentElement.addEventListener('click', handler);
  }

  toggleMenu() {
    if(this._isOpen()) {
      this._menuTl.reverse(0);
    } else {      
      this._menuTl.play(0);
    }

    this._menu.classList.toggle('open');
  }
  closeMenu() {
    if(this._isOpen()) {
      this._menuTl.reverse(0);
      this._menu.classList.toggle('open');
    }
  }

  _isOpen() {
    return this._menu.classList.contains('open');
  }

  //// Animations ////
  _animateIn() {
    const header = document.querySelector('.header');
    return gsap.timeline().fromTo('.header', {autoAlpha:0}, {autoAlpha:1, onComplete: ()=> console.log(header)})
  }
  _getBurgerTl() {
    return gsap
    .timeline({ 
      defaults: {duration:.4},
      onStart: () => {this._menu.classList.remove('hidden')},
      onReverseComplete: () => {this._menu.classList.add('hidden')}
    })
      .to(this._lines[0], { scaleX: 0 })
      .to(this._lines[2], { scaleX: 0 }, '<.2')
      .to(this._lines[1], { rotate:135 }, '<.2')
      .set(this._lines[3], { display:'block', rotate:135}, '<.35')
      .to(this._lines[3], { rotate:45 }, '<');
  }
  _getMenuContentTl() {
      return gsap.timeline()
        .fromTo(this._mobileItems, { autoAlpha:0, x:30 }, { autoAlpha:1, x:0, stagger: '.1' }, '<')
  }
}