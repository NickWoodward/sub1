import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import config from /* preval */ '../../../../tailwind.config';
const { theme: { screens } } = config;

import View from '../View';
const whyUsImage = require('../../../assets/images/construction-worker-compressed-1275.jpg');
const whyUsSmall = require('../../../assets/images/construction-worker-compressed-425.jpg');
const whyUsMedium = require('../../../assets/images/construction-worker-compressed-850.jpg');
const whyUsLarge = require('../../../assets/images/construction-worker-compressed-1275.jpg');
const whyUsSmallWebp = require('../../../assets/images/construction-worker-compressed-425.webp'); 
const whyUsMediumWebp = require('../../../assets/images/construction-worker-compressed-850.webp');
const whyUsLargeWebp = require('../../../assets/images/construction-worker-compressed-1275.webp');

class WhyUs extends View {
  _elementName = 'why-us';
  _parentElement;
  title = "Why SUB1";
  content = `SUB1 creates hyper-efficient data centres for single tenant occupancy. Tenants pay for power directly with utility providers, resulting in a total cost of ownership (TCO) of around half, compared to large colo deployments with metered power.`;
  content2 = `Each site is selected based on power availability and carrier density. SUB1 has a variety of sites available, to suit various requirements.`;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} border border-blue-500 menu-section bg-slate-200 scroll-mt-[70px] " id="${this._elementName}">

        <div class=" flex items-end  min-h-min xs:pt-24 lg:pt-0  xl:pt-22">
          <div class="relative pt-20 pb-24 w-full">
            <div class="why-us-bg-1 absolute top-0 left-0 w-full h-full bg-white"></div>
            <div class="why-us-bg-2 absolute top-0 left-0 pt-24 pb-28 sm:pt-0 sm:pb-0 w-full h-full bg-primary"></div>
            <div class="flex max-w-xl h-full mx-auto  px-4 xs:pt-0 xs:pb-12 sm:pb-24 xxs:px-8 md:max-w-2xl m lg:relative lg:max-w-6xl xl:max-w-[1440px] xl:px-0 lg:z-10 lg:pb-0">
              <div class="  xs:-mt-32 lg:mt-0 relative h-full w-full xxs:max-w-xl xs:mx-auto md:max-w-2xl lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 ">
                
                <!--  Image Wrapper -->
                <div class="image-wrapper hidden relative xs:block lg:-my-8 lg:pb-0">
                  <div class="mx-auto max-w-xl md:max-w-2xl lg:h-full lg:p-0">
                    <div class="overflow-hidden rounded-xl shadow-xl  lg:h-full">
                      <div class="bg-slate-700 h-full">
                        <picture>
                          
                          <source 
                            type="image/webp"
                            srcset="${whyUsSmallWebp} 425w, ${whyUsMediumWebp} 850w, ${whyUsLargeWebp} 1275w"
                            sizes="(min-width: ${screens.xs}) 512w, (min-width: ${screens.md}) 608w, (min-width: ${screens.lg}) 341w, (min-width: ${screens.xl}) 405w"
                          >
                          <source 
                            type="image/jpg"
                            srcset="${whyUsSmall} 425w, ${whyUsMedium} 850w, ${whyUsLarge} 1275w"
                            sizes="(min-width: ${screens.xs}) 512w, (min-width: ${screens.md}) 608w, (min-width: ${screens.lg}) 341w, (min-width: ${screens.xl}) 405w"
                          >
                          <img src=${whyUsSmall} alt="An engineer looking into the distance" decoding="async" height="405" width="611" loading="lazy"
                            class="h-full object-cover opacity-60 brightness-[40%] grayscale -scale-x-100" 
                          >
                        </picture>
                        <!--<picture>
                          
                          <img class="object-cover opacity-60 brightness-[40%] grayscale -scale-x-100 " src="${whyUsImage}" alt="An engineer looking into the distance" decoding="async" height="405" width="611" loading="lazy">
                        </picture>-->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Content Wrapper -->
                <div class="h-full flex flex-col justify-start space-y-8 xs:space-y-6 sm:space-y-6  xs:absolute xs:left-0 xs:top-0 xs:h-full xs:pt-10 xs:pb-14 xs:px-10 lg:relative lg:justify-start lg:mt-0 lg:left-auto lg:top-auto lg:col-span-2 lg:pl-12">
                  <p class="why-us-headline mt-0 text-xl px-2 xs:px-0 xs:text-2xl md:text-3xl font-semibold tracking-tight text-primaryDark xs:text-primary sm:font-medium lg:text-primaryDark lg:mt-8 lg:pl-10 xl:mt-16">${this.title}</p>

                  <div class="why-us-content grow flex mx-auto max-w-md  px-4 xs:px-0 xs:max-w-2xl lg:max-w-5xl lg:mt-0 lg:px-0 lg:pt-3 lg:pb-4">
                    <blockquote>
                      <div class="relative">
                        <svg class="why-us-quotes absolute -top-6 -left-4 lg:left-0 h-12 w-12 text-white opacity-25 " fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p class="why-us-description flex flex-col mt-2 text-lg xs:text-xl text-white lg:pl-10">
                          ${this.content}
                          <span class="mt-3"></span>
                          ${this.content2}  
                        </p>
                        
                      </div>
                      <!--<footer class="why-us-footer mt-6 lg:pl-10">
                        <p class="text-base font-medium text-white">The Owner, 40</p>
                        <p class="text-base font-medium text-primaryDark xxs:text-primary lg:text-primaryDark">CEO at Sub1</p>
                      </footer>-->
                    </blockquote>
                  </div>
                  <div class="flex justify-end items-end grow" >
                    <button class="relative inline-flex h-12 rounded-md   bg-slate-200 py-3 px-6 text-base font-medium text-primaryDark shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <p class="button__text">Find Out More</p>
                      
                      <!--<div class="success-svg success-svg--contact invisible absolute top-0 left-0 h-full w-full flex items-center justify-center rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-3/4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </button>-->
                  
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

    tl.from('.why-us-bg-1', {
      autoAlpha:0,
      xPercent: 100,
      duration: .8,
      ease: 'power4.out'
    })
    .from(`.${this._elementName} .image-wrapper`, {
      autoAlpha: 0.8,
      yPercent: 10,
      duration: .8
    }, '<').from('.why-us-headline', {
      autoAlpha:0,
      x: -80,
      duration: .8
    }, '<')
    .from('.why-us-bg-2', {
      autoAlpha:0,
      xPercent: 80,
      duration: .8,
      ease: 'power4.out'

    }, '< .9').from('.why-us-description', {
      autoAlpha:0,
      duration: .4
    }, '<')
    .from('.why-us-quotes', {
      autoAlpha:0,
      duration: .4
    }, '<')
    .from('.why-us-footer', {
      autoAlpha:0,
      duration: .4
    }, '<.1')
    // tl.from('.whyUs-bg-1', {
    //   autoAlpha:0,
    //   xPercent: 100,
    //   duration: .35
    // })
    // .from(`.${this._elementName} .image-wrapper`, {
    //   autoAlpha: 0.5,
    //   yPercent: 10,
    //   duration: .8
    // }, '<').from('.why-us-headline', {
    //   autoAlpha:0,
    //   x: -80,
    //   duration: .8
    // }, '<')
    // .from('.why-us-bg-2', {
    //   autoAlpha:0,
    //   xPercent: 100,
    //   duration: .35
    // }, '< .8').from('.why-us-description', {
    //   autoAlpha:0,
    //   duration: .4
    // }, '<')
    // .from('.why-us-quotes', {
    //   autoAlpha:0,
    //   duration: .4
    // }, '<')
    // .from('.why-us-footer', {
    //   autoAlpha:0,
    //   duration: .4
    // }, '<.1')

    // Separate scrolltrigger objects allow leaveback and onenter trigger points to be different
    ScrollTrigger.create({
      trigger: '.why-us-bg-1',
      start: "top 80%",
      // markers:true,
      onEnter: () => tl.play()
    });
    ScrollTrigger.create({
      trigger: '.why-us-bg-1',
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
    }).from('.why-us-headline', {
      autoAlpha: 0,
      yPercent: -60
    }, '<.2');

    contentsTl.from('.why-us-quotes', {
      autoAlpha: 0,
      xPercent: 100
    }).from('.why-us-description', {
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
      trigger: '.why-us-content',
      start: "top 90%",
      onEnter: () => contentsTl.play()
    });
    ScrollTrigger.create({
      trigger: '.why-us-content',
      start: "top 110%",
      onLeaveBack: () => contentsTl.pause(0)
    });
  }

}

export default WhyUs;