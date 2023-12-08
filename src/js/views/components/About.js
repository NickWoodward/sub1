import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import config from /* preval */ '../../../../tailwind.config';
const { theme: { screens } } = config;

import View from '../View';

const icon1 = require('../../../assets/recycle-cropped.png');
const icon2 = require('../../../assets/settings-cropped.png');
const icon3 = require('../../../assets/solar-cropped.png');


class About extends View {
  _elementName = 'concept';
  _parentElement;
  _cards;
  subtitle = "Cost Efficient, Resilient & Secure";
  // title = "Lease Our 1-10MW Single-Tenant Data Centres";
  title = "Single-Tenant Data Centres";
  content = "New or fully refurbished hyper-efficient data centres, with low cooling requirements, onsite power generation and direct utility procurement.";

  card1 = "The reduced mechanical load leverages renewable energy generated onsite";
  card2 = "Compressorless cooling via evaporative free-air system, with active hot and cold-aisle containment";
  card3 = "Resilient and sustainable back-up generator sets, 100% powered by HVO";

  // <br /><br /> Our sites allow firms to benefit from the sustainability, cost-efficiency, and resilience typically exclusive to larger cloud operators

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} menu-section scroll-mt-header" id="${this._elementName}">
        <div class="relative flex items-center min-h-min lg:h-section bg-slate-200 pt-24 pb-28 xs:py-32 lg:py-24">
          <div class="relative mx-auto max-w-xl px-4 xxs:px-8  md:max-w-2xl lg:max-w-6xl xl:max-w-[1400px] lg:px-8 xl:px-0">
            <div class="">
              <h2 class="strapline text-lg font-semibold text-primary">${this.subtitle}</h2>

              <!--<h2 class="strapline text-lg font-semibold text-primary">Efficient Power and Cooling Solutions</h2>-->

              <p class="headline mt-2 text-2xl xxs:text-3xl font-semibold tracking-tight text-slate-700">${this.title}</p>

              <p class="description mt-5 max-w-prose text-xl text-gray-500">${this.content}</p>
            </div>
            <div class="mt-20">
              <div class="grid grid-cols-1 gap-8 xl:gap-12 lg:grid-cols-3">

                <div class="card pt-6">
                  <div class="flow-root  lg:min-h-[330px] shadow-sm rounded-lg bg-gray-50 px-10 pb-12">
                    <div class="-mt-6">
                      <div class="card__icon  flex justify-between items-center ">
                        <img src=${icon3} alt="A sun and solar panel" class="w-28 sm:w-32 -translate-x-4" />
                        <a href="" class="flex  items-end justify-end space-x-1  lg:pl-3  font-medium  text-primary">
                          <div class=" flex justify-end gap-2">
                            <div class="hidden sm:flex lg:hidden">Find Out More</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24"  stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <h3 class="card__header mt-6 text-xl font-semibold leading-8 tracking-tight text-slate-700">Onsite Generation</h3>
                      <p class="card__description mt-2 text-lg leading-7 text-gray-600">${this.card1}</p>
                    </div>
                  </div>
                </div>

                <div class="card pt-6">
                  <div class="flow-root  lg:min-h-[330px] shadow-sm rounded-lg bg-gray-50 px-10 pb-12">
                    <div class="-mt-6">
                      <div class="card__icon flex justify-between items-center">
                        <img src=${icon2} alt="A water droplet and 2 cogs" class="w-28 sm:w-32 -translate-x-4" />
                        <a class="flex grow  items-end justify-end space-x-1  lg:pl-3  font-medium  text-primary">
                          <div class=" flex justify-between gap-2">
                            <div class="hidden sm:flex lg:hidden">Find Out More</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24"  stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <h3 class="card__header mt-6 text-xl font-semibold leading-8 tracking-tight text-slate-700">No Compressors</h3>
                      <p class="card__description mt-2 text-lg leading-7 text-gray-600">
                        ${this.card2}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card pt-6">
                  <div class="flow-root  lg:min-h-[330px] shadow-sm rounded-lg bg-gray-50 px-10 pb-12">
                    <div class="-mt-6">
                      <div class="card__icon flex justify-between items-center">
                        <img src=${icon1} alt="The earth with 2 arrows wrapping around it" class="w-28 sm:w-32 -translate-x-4" />
                        <a class="flex grow  items-end justify-end space-x-1  lg:pl-3  font-medium  text-primary">
                          <div class=" flex justify-between gap-2">
                            <div class="hidden sm:flex lg:hidden">Find Out More</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24"  stroke="currentColor" >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </div>
                        </a>
                      </div>
                      <h3 class="card__header mt-6 text-xl font-semibold leading-8 tracking-tight text-slate-700">No Fossil Fuels</h3>
                      <p class="card__description mt-2 text-lg leading-7 text-gray-600">
                        ${this.card3}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return markup;
  }

  _render() {
    this._setParentElement();
    super._render();
    this._initElements();
    this._initAnimations();
  }

  _setParentElement() {
    this._parentElement = document.querySelector('.index-view');
  }

  _initElements() {
    this._cards = Array.from(document.querySelectorAll('.card'));
  }

  //// Animations ////
  _initAnimations() {
    const mm = gsap.matchMedia();
    const { lg } = screens;
    mm.add({
      mobile: `(max-width: ${parseInt(lg) - 1}px)`,
      desktop: `(min-width: ${lg})`
    }, (context) => {  
      const { mobile, desktop } = context.conditions;
      
      this._sectionHeaderAnimation();
      if(desktop) this._cardAnimation();
      if(mobile) this._mobileCardAnimation();
    });

  }

  _sectionHeaderAnimation() {
    const tl = gsap.timeline({paused: true, defaults: {duration: .4, autoAlpha: 0, ease: 'power.in'}}).from('.strapline', {
      y:10
    }).from('.headline', {
      y:10
    }, '<.1').from('.description', {
      y:10
    }, '<.1');

    ScrollTrigger.create({
      trigger: ".strapline",
      start: "top 80%",
      // markers:true,
      onEnter: () => tl.play()
    });
  
    ScrollTrigger.create({
      trigger: '.strapline',
      start: "top 110%",
      // markers:true,
      onLeaveBack: () => tl.pause(0)
    });
  }

  _cardAnimation() {
    const tl = gsap.timeline({ paused: true });
    tl.from(this._cards, {
        autoAlpha: 0,
        x: -20,
        // scale: 0.988,
        stagger: {
          amount: .8,
          ease: "slow(0.7, 0.7, false)"    
        }
      }, '<-.2');
    
    // Separate scrolltrigger objects allow leaveback and onenter trigger points to be different
    ScrollTrigger.create({
      trigger: ".card",
      start: "top 80%",
      // markers:true,
      onEnter: () => tl.play()
    });
    ScrollTrigger.create({
      trigger: ".card",
      start: "top 110%",
      // markers:true,
      onLeaveBack: () => tl.pause(0)
    });
    
  }

  _mobileCardAnimation() {
    this._cards.forEach((card, index) => {
      const distance = index % 2 === 0 ? 5:-5;
      const tl = gsap.timeline({paused:true}).from(card, {
        autoAlpha: 0,
        xPercent: gsap.utils.wrap([-distance, distance, -distance]),
        ease:'power4.inOut"',
        duration: .7
      });
      
      // Separate scrolltrigger objects allow leaveback and onenter trigger points to be different
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        // markers:true,
        onEnter: () => tl.play()
      });
      ScrollTrigger.create({
        trigger: card,
        start: "top 110%",
        // markers:true,
        onLeaveBack: () => tl.pause(0)
      });
    });
   
  }
}

export default About;