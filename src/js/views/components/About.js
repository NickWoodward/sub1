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
      <div class="${this._elementName} menu-section scroll-pt-header" id="${this._elementName}">
        <div class="relative flex items-center min-h-min lg:h-section bg-slate-200 pt-24 pb-32 xs:py-32 lg:py-24">
          <div class="relative mx-auto max-w-xl px-4 xxs:px-8 text-center md:max-w-2xl lg:max-w-6xl xl:max-w-[1400px] lg:px-8 xl:px-0">
            <div class="">
            <h2 class="strapline text-lg font-semibold text-primary">Modern power and cooling technologies</h2>

              <!--<h2 class="strapline text-lg font-semibold text-primary">Efficient Power and Cooling Solutions</h2>-->

              <p class="headline mt-2 text-2xl xxs:text-3xl font-semibold tracking-tight text-slate-700">Sustainable and Efficient Data Centers</p>

              <p class="description mx-auto mt-5 max-w-prose px-2 text-xl text-gray-500">Differentiating with a set of principles that meets the UK's growing need for digital infrastructure, in an innovative and accessible way</p>
            </div>
            <div class="mt-20">
              <div class="grid grid-cols-1 gap-8 xl:gap-12 lg:grid-cols-3">

                <div class="card pt-6">
                  <div class="flow-root  min-h-[340px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div class="card__icon">
                        <img src=${icon3} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="card__header mt-8 text-xl font-semibold leading-8 tracking-tight text-slate-700">Onsite Generation</h3>
                      <p class="card__description mt-5 text-lg leading-7 text-gray-600">The reduced mechanical load will be fully powered by renewable energy generated onsite.</p>
                    </div>
                  </div>
                </div>

                <div class="card pt-6">
                  <div class="flow-root  min-h-[340px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div class="card__icon">
                        <img src=${icon2} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="card__header mt-8 text-xl font-semibold leading-8 tracking-tight text-slate-700">No Compressors</h3>
                      <p class="card__description mt-5 text-lg leading-7 text-gray-600">
                        Cooling 100% via free-air, misting dry-coolers (from rainwater), ground-source and active hot-aisle containment.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card pt-6">
                  <div class="flow-root  min-h-[340px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div class="card__icon">
                        <img src=${icon1} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="card__header mt-8 text-xl font-semibold leading-8 tracking-tight text-slate-700">No Fossil Fuels</h3>
                      <p class="card__description mt-5 text-lg leading-7 text-gray-600">
                        Zero carbon emissions from 100% hydrogen powered onsite back-up generators 
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