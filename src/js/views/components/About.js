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
  _elementName = 'about';
  _parentElement;
  _cards;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} scroll-mt-24" id="${this._elementName}">
        <div class="relative flex items-center lg:h-section bg-slate-200 pt-24 pb-32 xs:py-32 lg:py-24">
          <div class="relative mx-auto max-w-xl px-4 xxs:px-8 text-center md:max-w-2xl lg:max-w-6xl xl:max-w-7xl lg:px-8 ">
            <div class="">
              <h2 class="strapline text-lg font-semibold text-primary">Deploy smarter</h2>
              <p class="headline mt-2 text-2xl xxs:text-3xl font-semibold tracking-tight text-slate-700">Lorem ipsum dolor sit, amet consectetur</p>

              <p class="description mx-auto mt-5 max-w-prose px-2 text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis adipisci quo minus, dicta eveniet itaque unde vel eius? Eum, quae.</p>
            </div>
            <div class="mt-20">
              <div class="grid grid-cols-1 gap-8 xl:gap-12 lg:grid-cols-3">

                <div class="card pt-6">
                  <div class="flow-root  min-h-[360px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div class="card__icon">
                        <img src=${icon1} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="card__header mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">Adipisicing</h3>
                      <p class="card__description mt-5 text-base leading-7 text-gray-600">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </div>
                  </div>
                </div>

                <div class="card pt-6">
                  <div class="flow-root  min-h-[360px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div class="card__icon">
                        <img src=${icon2} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="card__header mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">Lorem ipsum</h3>
                      <p class="card__description mt-5 text-base leading-7 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id esse odio adipisci sunt nisi dolor minima corporis recusandae! Aspernatur.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card pt-6">
                  <div class="flow-root  min-h-[360px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div class="card__icon">
                        <img src=${icon3} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="card__header mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">Voluptate id</h3>
                      <p class="card__description mt-5 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ut magni? Veniam autem harum excepturi fuga tempore inventore.</p>
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
      
      console.log({mobile}, {desktop});

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
          amount: .4,
          ease: 'power.in'
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