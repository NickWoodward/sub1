import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import config from /* preval */ '../../../../tailwind.config';
const { theme: { screens } } = config;

import View from '../View';
const opportunityImage = require('../../../assets/images/construction-worker-compressed-1275.jpg');
const opportunitySmall = require('../../../assets/images/construction-worker-compressed-425.jpg');
const opportunityMedium = require('../../../assets/images/construction-worker-compressed-850.jpg');
const opportunityLarge = require('../../../assets/images/construction-worker-compressed-1275.jpg');
const opportunitySmallWebp = require('../../../assets/images/construction-worker-compressed-425.webp'); 
const opportunityMediumWebp = require('../../../assets/images/construction-worker-compressed-850.webp');
const opportunityLargeWebp = require('../../../assets/images/construction-worker-compressed-1275.webp');

class Opportunity extends View {
  _elementName = 'opportunity';
  _parentElement;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} menu-section scroll-mt-[180px]" id="${this._elementName}">

        <div class="bg-slate-200  flex items-end justify-center min-h-min  xs:pt-24 lg:pt-16 xl:pt-22">
          <div class="relative w-full">
          <div class="opportunity-bg-1 absolute top-0 left-0 w-full h-full bg-white"></div>
            <div class="opportunity-bg-2 absolute top-0 left-0 w-full h-full bg-primary"></div>
            <div class="max-w-xl mx-auto pt-4 pb-28 px-4 xs:pt-0 xs:pb-12 sm:pb-24 xxs:px-8 md:max-w-2xl m lg:relative lg:max-w-6xl xl:max-w-[1440px] xl:px-0 lg:z-10 lg:pb-0">
              <div class="relative w-full xxs:max-w-xl xs:mx-auto md:max-w-2xl lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 ">
                
                <!--  Image Wrapper -->
                <div class="image-wrapper hidden relative -mt-32 xs:block lg:-my-8 lg:pb-0">
                  <div class="mx-auto max-w-xl md:max-w-2xl lg:h-full lg:p-0">
                    <div class="overflow-hidden rounded-xl shadow-xl  lg:h-full">
                      <div class="bg-slate-700 h-full">
                        <picture>
                          
                          <source 
                            type="image/webp"
                            srcset="${opportunitySmallWebp} 425w, ${opportunityMediumWebp} 850w, ${opportunityLargeWebp} 1275w"
                            sizes="(min-width: ${screens.xs}) 512w, (min-width: ${screens.md}) 608w, (min-width: ${screens.lg}) 341w, (min-width: ${screens.xl}) 405w"
                          >
                          <source 
                            type="image/jpg"
                            srcset="${opportunitySmall} 425w, ${opportunityMedium} 850w, ${opportunityLarge} 1275w"
                            sizes="(min-width: ${screens.xs}) 512w, (min-width: ${screens.md}) 608w, (min-width: ${screens.lg}) 341w, (min-width: ${screens.xl}) 405w"
                          >
                          <img src=${opportunitySmall} alt="An engineer looking into the distance" decoding="async" height="405" width="611" loading="lazy"
                            class="object-cover opacity-60 brightness-[40%] grayscale -scale-x-100" 
                          >
                        </picture>
                        <!--<picture>
                          
                          <img class="object-cover opacity-60 brightness-[40%] grayscale -scale-x-100 " src="${opportunityImage}" alt="An engineer looking into the distance" decoding="async" height="405" width="611" loading="lazy">
                        </picture>-->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Content Wrapper -->
                <div class="flex flex-col justify-center mt-8 xs:mt-0 xs:absolute xs:left-0 xs:top-0 xs:h-full xs:justify-between pt-8 xs:pb-12 xs:px-10 lg:relative lg:justify-start lg:mt-0 lg:left-auto lg:top-auto lg:col-span-2 lg:pl-12">
                  <p class="opportunity-headline mt-0 xs:mt-2 text-xl px-2 xs:px-0 xs:text-2xl md:text-3xl font-semibold tracking-tight text-primaryDark xs:text-primary sm:font-medium lg:text-primaryDark lg:mt-8 lg:pl-10 xl:mt-16">Opportunity</p>

                  <div class="opportunity-content mx-auto max-w-md mt-6 px-4 xs:px-0 xs:max-w-2xl lg:max-w-5xl lg:mt-0 lg:px-0 lg:pt-8 lg:pb-10">
                    <blockquote>
                      <div class="relative">
                        <svg class="opportunity-quotes absolute -top-6 -left-4 lg:left-0 h-12 w-12 text-white opacity-25 " fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p class="opportunity-description mt-2 text-lg xs:text-xl text-white lg:pl-10">Demand for data centre space in the UK is outpacing supply. Many new facilities are being built on greenfield sites, and are often presold to large cloud operators. This can lead to environmental impacts and challenges around power availability, for developments such as housing. SUB1 will convert industrial brownfield sites, with or close to existing power capacity. These sites will be converted using the latest power and cooling technologies for optimal efficiency</p>
                      </div>
                      <!--<footer class="opportunity-footer mt-6 lg:pl-10">
                        <p class="text-base font-medium text-white">The Owner, 40</p>
                        <p class="text-base font-medium text-primaryDark xxs:text-primary lg:text-primaryDark">CEO at Sub1</p>
                      </footer>-->
                    </blockquote>
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
    this._initAnimations();
  }

  _setParentElement() {
    this._parentElement = document.querySelector('.index-view');
  }

  _initAnimations() {
    const mm = gsap.matchMedia();
    const { lg } = screens;
    mm.add({
      mobile: `(max-width: ${parseInt(lg) - 1}px)`,
      desktop: `(min-width: ${lg})`
    }, (context) => {  
      const { mobile, desktop } = context.conditions;
      
      if(desktop) this._desktopAnimation();
      if(mobile) this._mobileAnimation();
    });
  }

  _desktopAnimation() {
    const tl = gsap.timeline({ paused:true });

    tl.from('.opportunity-bg-1', {
      autoAlpha:0,
      xPercent: 100,
      duration: .8,
      ease: 'power4.out'
    })
    .from(`.${this._elementName} .image-wrapper`, {
      autoAlpha: 0.8,
      yPercent: 10,
      duration: .8
    }, '<').from('.opportunity-headline', {
      autoAlpha:0,
      x: -80,
      duration: .8
    }, '<')
    .from('.opportunity-bg-2', {
      autoAlpha:0,
      xPercent: 80,
      duration: .8,
      ease: 'power4.out'

    }, '< .9').from('.opportunity-description', {
      autoAlpha:0,
      duration: .4
    }, '<')
    .from('.opportunity-quotes', {
      autoAlpha:0,
      duration: .4
    }, '<')
    .from('.opportunity-footer', {
      autoAlpha:0,
      duration: .4
    }, '<.1')
    // tl.from('.opportunity-bg-1', {
    //   autoAlpha:0,
    //   xPercent: 100,
    //   duration: .35
    // })
    // .from(`.${this._elementName} .image-wrapper`, {
    //   autoAlpha: 0.5,
    //   yPercent: 10,
    //   duration: .8
    // }, '<').from('.opportunity-headline', {
    //   autoAlpha:0,
    //   x: -80,
    //   duration: .8
    // }, '<')
    // .from('.opportunity-bg-2', {
    //   autoAlpha:0,
    //   xPercent: 100,
    //   duration: .35
    // }, '< .8').from('.opportunity-description', {
    //   autoAlpha:0,
    //   duration: .4
    // }, '<')
    // .from('.opportunity-quotes', {
    //   autoAlpha:0,
    //   duration: .4
    // }, '<')
    // .from('.opportunity-footer', {
    //   autoAlpha:0,
    //   duration: .4
    // }, '<.1')

    // Separate scrolltrigger objects allow leaveback and onenter trigger points to be different
    ScrollTrigger.create({
      trigger: '.opportunity-bg-1',
      start: "top 80%",
      // markers:true,
      onEnter: () => tl.play()
    });
    ScrollTrigger.create({
      trigger: '.opportunity-bg-1',
      start: "top 110%",
      // markers:true,
      onLeaveBack: () => tl.pause(0)
    });
  }

  _mobileAnimation() {
    const tl = gsap.timeline({ paused:true });
    const contentsTl = gsap.timeline({ paused:true });

    tl.from('.image-wrapper', {
      autoAlpha: 0,
      yPercent: 10
    }).from('.opportunity-headline', {
      autoAlpha: 0,
      yPercent: -60
    }, '<.2');

    contentsTl.from('.opportunity-quotes', {
      autoAlpha: 0,
      xPercent: 100
    }).from('.opportunity-description', {
      autoAlpha: 0,
      duration: .8
    }, '<.2');

    ScrollTrigger.create({
      trigger: '.image-wrapper',
      start: "top 80%",
      onEnter: () => tl.play()
    });
    ScrollTrigger.create({
      trigger: '.image-wrapper',
      start: "top 110%",
      onLeaveBack: () => tl.pause(0)
    });


    ScrollTrigger.create({
      trigger: '.opportunity-content',
      start: "top 90%",
      onEnter: () => contentsTl.play()
    });
    ScrollTrigger.create({
      trigger: '.opportunity-content',
      start: "top 110%",
      onLeaveBack: () => contentsTl.pause(0)
    });
  }

}

export default Opportunity;