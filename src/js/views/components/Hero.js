import {gsap} from 'gsap';
import View from '../View';

import config from /* preval */ '../../../../tailwind.config';
const { theme: { screens } } = config;

import { getMediaQueryLists, getScreenSize, debounce } from '../../utils/helper';

// Images

// const servers = require('../../../assets/servers.jpg');
// const solar = require('../../../assets/solar.jpg');
// const datacenter = require('../../../assets/datacenter-dark-compressed.jpg');

const serversMobile = require('../../../assets/images/servers-compressed-400.jpg');
const serversSmall = require('../../../assets/images/servers-compressed-640.jpg');
const serversMedium = require('../../../assets/images/servers-compressed-1280.jpg');
const serversLarge = require('../../../assets/images/servers-compressed-1920.jpg');
const serversMobileWebp = require('../../../assets/images/servers-compressed-400.webp');
const serversSmallWebp = require('../../../assets/images/servers-compressed-640.webp');
const serversMediumWebp = require('../../../assets/images/servers-compressed-1280.webp');
const serversLargeWebp = require('../../../assets/images/servers-compressed-1920.webp');
// The two other slider images are required when the DOM has loaded

class Hero extends View {
    _elementName = 'hero';
    _element;
    _parentElement;
    _emailLink;
    _heroImages = ['servers', 'lazyloaded-solar', 'lazyloaded-datacenter'];
    _slides;
    _numSlides;
    _slideIndex = 0;
    _currentSlide;
    _autoSlideShow;
    _autoPlay = true;
    _imageNavigation;
    _autoPlayBtn;
    _timer;

    constructor(data) {
        super(data);
        this._data.markup = this._generateMarkup();
    }

    _generateMarkup() {
      const markup = /*html*/`
        <div class="${this._elementName} relative mt-[var(--header-height)] scroll-mt-header min-h-min h-section"  id="${this._elementName}">
          <!-- Hero Content Wrapper-->
          <div class="relative h-full w-full bg-white before:hidden before:absolute before:bg-white before:w-4/6 before:lg:block xl:before:w-3/5 before:h-full before:border-slate-100 before:border-r-8 before:-skew-x-12 before:z-30">
            
            <!-- The Bg Image -->
            <div class="absolute top-0 right-0 h-full w-full bg-slate-400  ml-auto object-cover lg:w-1/2 lg:h-full " > </div>
            <div class="image-wrapper relative mix-blend-multiply brightness-[40%] h-full ml-auto lg:w-1/2 lg:h-full lg:brightness-100  grayscale">
              <picture>
                <source 
                  type="image/webp"
                  srcset="${serversMobileWebp} 400w, ${serversSmallWebp} 640w, ${serversMediumWebp} 1280w, ${serversLargeWebp} 1920w"
                  sizes="(min-width: ${screens.lg}) 50vw"
                >
                <source 
                  type="image/jpg"
                  srcset="${serversMobile} 400w, ${serversSmall} 640w, ${serversMedium} 1280w, ${serversLarge} 1920w"
                  sizes="(min-width: ${screens.lg}) 50vw"
                >
                <img src=${serversSmall} alt="A close up of server racks"
                  class="hero__image absolute right-0 top-0 opacity-[0.6] h-full object-cover lg:h-full grayscale" 
                >
              </picture>
            </div>

            <!-- Image Navigation -->
            <div class="image__navigation absolute right-0 bottom-0 flex items-center mb-9 mr-6">
              <div class="prev__btn cursor-pointer">
                <svg class="h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </div>

              <div class="flex items-center">
                ${this._heroImages.map((img, index) => this._createHeroNavigationIcon(index)).join('')}
              </div>

              <div class="next__btn cursor-pointer">
                <svg class="h-5 w-5 ml-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>

              <button type="button" class="autoplay__btn bg-primary relative inline-flex h-5 w-9 ml-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ring-2 ring-primary ring-offset-2">
                <span class="sr-only">AutoPlay</span>

                <span class="autoplay__toggle translate-x-4 pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                  <span class="autoplay__icon--off opacity-0 ease-in duration-200 absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                    <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                      <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>

                  <span class="autoplay__icon--on opacity-100 ease-out duration-100 absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
                    <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                  </span>

                </span>
              </button>

            </div>

            <!-- Hero Content -->
            <!--<div class="absolute container top-1/2 left-1/2 -translate-y-[58%] -translate-x-1/2 text-primary z-20">-->
            <div class="absolute w-full max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-[1400px] top-1/2 left-1/2 -translate-y-[58%] -translate-x-1/2 px-4 xxs:px-8 lg:px-0 text-primary z-30">
            
              <main class="lg:px-2 lg:w-1/2 xl:px-0 xl:pl-0">
                <div class=" md:text-left">
                  <h1>
                    <!--<div>
                      <a href="#" class="inline-flex space-x-4 mb-2">
                        <span class="inline-flex items-center space-x-1 text-lg font-semibold text-slate-400 lg:text-gray-500">
                          <span>Just shipped version 0.1.0</span>
                          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </a>
                    </div>-->

                    <!-- <span class="block text-base font-semibold text-gray-500 xs:text-lg lg:text-base xl:text-lg">Coming soon</span> -->
                    <span class="mt-1 block text-3xl xxs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl">
                      <span class="block text-2xl xxs:text-3xl font-semibold tracking-tight text-slate-300 lg:text-slate-700">Create, Lease and Sell</span>
                      <span class="block mt-2 text-primary font-semibold">Hyper Efficient Edge Data Centers</span>
                    </span>
                  </h1>
                  <p class="mt-3 text-base text-slate-200 xs:mt-5 xs:text-xl lg:text-lg lg:text-gray-500 xl:text-2xl">Register interest in the latest investment round</p>
                  <div class="mt-8 xs:max-w-lg  md:text-left md:mx-0 lg:text-left lg:max-w-lg">
                    <p class="text-base font-medium lg:text-gray-900">Sign up to receive futher information</p>
                    <form action="#" method="POST" class="mt-3 xs:flex xs:flex-row sm:w-full  sm:flex-row">  
                    <label for="email--hero" class="sr-only">Email</label>
                    <input type="email" name="email" id="email--hero" class="email--hero block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary xs:flex-1" placeholder="Enter your email">
                    <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center xs:justify-center xs:mt-0 xs:ml-3">Submit</button>
                      <!-- Hidden link to be clicked dynamically --> 
                      <a href="#contact" class="hero__link hidden"></a>
                    </form>
                    <p class="privacy-link mt-3 text-sm text-slate-300  xs:mt-3 md:mx-0 lg:text-gray-500">
                      We care about the protection of your data. Read our
                      <a href="#" class="font-medium lg:text-gray-900 underline">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </main>
            
            </div>

            <!-- Progress Bar -->
            <div class="progress absolute bottom-0 left-[var(--progressbar-left)] w-[var(--progressbar-width)] h-2 bg-primary z-20"></div>

          </div>
        </div>
      `;

        return markup;
    }

    _render() {
      this._setParentElement();
      super._render();
      this._initElements();
      // This initialises the hero animation too
      this._initLazyLoading();

    }

    _setParentElement() {
      this._parentElement = document.querySelector('.index-view');
    }

    _createHeroNavigationIcon(index) {
      return (`
        <div class="image-icon w-4 h-4 mr-3 last:mr-0 bg-primary border-2 border-white rounded-full cursor-pointer" data-id="${index}"></div>
      `);
    }

    _initElements() {
      this._element = document.querySelector(`.${this._elementName}`);
      this._emailLink = this._element.querySelector('.hero__link');

      this._timer = gsap.timeline()
        .fromTo(".progress", {
          opacity: 0
        }, {
          opacity: 1,
          duration: 3
        })
        .from(".progress", {
          scaleX:0, 
          transformOrigin:"0% 50%", 
          duration: 10, 
        }, '<')
        .to(".progress", { 
          opacity: 0,
          onComplete:()=> {
            this._nextSlide()
          }
        })
      .pause()

      this._mqls = getMediaQueryLists(this._setLeft.bind(this));

      // Set the positioning for the progress bar
      this._setLeft();

      // Set a resize listener
      window.addEventListener('resize', () => {
        debounce(this._setLeft());
      });
    }

    _nextSlide() {
      this._slideIndex = this._slideIndex < this._numSlides -1 ? this._slideIndex +1 : 0;
      this._showSlide();
      // if(this._autoPlay) this._autoSlideShow.restart(true);
    }
    _prevSlide() {
      this._slideIndex = this._slideIndex > 0? this._slideIndex -1 : this._numSlides -1;
      this._showSlide();
    }
    
    _hideSlide() {
      if(this._currentSlide) 
        gsap.to(this._currentSlide, { 
          opacity: 0,
          duration: .8
        });
    }

    _showSlide() {
      this._setActiveIcon();

      // If no crossfade wanted, always call _hideSlide directly with an onComplete to _showSlide
      if(this._currentSlide) this._hideSlide();

      this._currentSlide = this._slides[this._slideIndex];
      gsap.to(this._currentSlide, { 
        opacity: .6,
        duration: .8,
        onComplete: () => {
          if(this._autoPlay) this._timer.restart();
        }
      })
    }

    _setActiveIcon() {
      const icons = Array.from(this._imageNavigation.querySelectorAll('.image-icon'));
      icons.forEach(icon => {
        if(parseInt(icon.dataset.id) === this._slideIndex) {
          icon.classList.add('ring-1', 'ring-primary', 'ring-offset-1', 'ease-out', 'duration-300'); 
        } else {
          icon.classList.remove('ring-1', 'ring-primary', 'ring-offset-1', 'ease-out', 'duration-300');
        }
      })
    }

    _toggleAutoplayBtn() {
      const autoplayBtn = document.querySelector('.autoplay__btn');
      const toggle = autoplayBtn.querySelector('.autoplay__toggle');
      const autoplayIconOff = autoplayBtn.querySelector('.autoplay__icon--off');
      const autoplayIconOn = autoplayBtn.querySelector('.autoplay__icon--on');

      // Remove 'off' classes
      toggle.classList.toggle('translate-x-0');
      autoplayBtn.classList.toggle('bg-gray-200');
      autoplayIconOff.classList.toggle('opacity-100');
      autoplayIconOn.classList.toggle('opacity-0');

      // Add 'on' classes
      toggle.classList.toggle('translate-x-4');
      autoplayBtn.classList.toggle('bg-primary');
      autoplayIconOn.classList.toggle('opacity-100');
      autoplayIconOff.classList.toggle('opacity-0');
    }

    _turnAutoplayBtnOff() {
      const autoplayBtn = document.querySelector('.autoplay__btn');
      const toggle = autoplayBtn.querySelector('.autoplay__toggle');
      const autoplayIconOff = autoplayBtn.querySelector('.autoplay__icon--off');
      const autoplayIconOn = autoplayBtn.querySelector('.autoplay__icon--on');

      toggle.classList.add('translate-x-0');
      autoplayBtn.classList.add('bg-gray-200');
      autoplayIconOff.classList.add('opacity-100');
      autoplayIconOn.classList.add('opacity-0');

      toggle.classList.remove('translate-x-4');
      autoplayBtn.classList.remove('bg-primary');
      autoplayIconOn.classList.remove('opacity-100');
      autoplayIconOff.classList.remove('opacity-0');
    }

    _setLeft() {
      // Hardcoded because calculating it isn't accurate enough
      const TWELVE_DEGS_TO_RADIANS = 0.22;
      const content = document.querySelector('.hero');
      const bounds = content.getBoundingClientRect();

      const size = getScreenSize(this._mqls);

      // The content tailwind width is set as w-3/5 (xl) or w-4/6 (<xl)
      let start;
      let width;

      switch(size) {
        case 'xlarge': {
          start = bounds.right / 5 * 3;
          width = bounds.width / 5 * 2;
          break;
        }
        case 'large': {
          start = bounds.right / 6 * 4;
          width = bounds.width / 6 * 2;
          break;
        }
        default: {
          start = 0;
          width = bounds.width
        }
      }

      const height = bounds.height;
      const radians = TWELVE_DEGS_TO_RADIANS;
      const tan = Math.tan(radians);

      // Alter the start position by the angle of the skew
      // skew offset = tan(degrees in radians) * h/2 (deg to radians: deg * (PI/180))
      const horizontalOffset = tan * height;
      start -= horizontalOffset / 2 + 5;
      width += horizontalOffset / 2;

      document.documentElement.style.setProperty('--progressbar-left', `${start}px`);
      document.documentElement.style.setProperty('--progressbar-width', `${width}px`)
    }

    _initLazyLoading() {
      // Set a listener for the 'load' (not DOMContentLoaded) event
      // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
      window.addEventListener('load', () => {
        const imageWrapper = document.querySelector('.image-wrapper');
        const solarMobile = require('../../../assets/images/solar-compressed-400.jpg');
        const solarSmall = require('../../../assets/images/solar-compressed-640.jpg');
        const solarMedium = require('../../../assets/images/solar-compressed-1280.jpg');
        const solarLarge = require('../../../assets/images/solar-compressed-1920.jpg');
        const solarMobileWebp = require('../../../assets/images/solar-compressed-400.webp');
        const solarSmallWebp = require('../../../assets/images/solar-compressed-640.webp');
        const solarMediumWebp = require('../../../assets/images/solar-compressed-1280.webp');
        const solarLargeWebp = require('../../../assets/images/solar-compressed-1920.webp');
        const datacenterMobile = require('../../../assets/images/datacenter-compressed-400.jpg');
        const datacenterSmall = require('../../../assets/images/datacenter-compressed-640.jpg');
        const datacenterMedium = require('../../../assets/images/datacenter-compressed-1280.jpg');
        const datacenterLarge = require('../../../assets/images/datacenter-compressed-1920.jpg');
        const datacenterMobileWebp = require('../../../assets/images/datacenter-compressed-400.webp');
        const datacenterSmallWebp = require('../../../assets/images/datacenter-compressed-640.webp');
        const datacenterMediumWebp = require('../../../assets/images/datacenter-compressed-1280.webp');
        const datacenterLargeWebp = require('../../../assets/images/datacenter-compressed-1920.webp');

        const markup = `
          <picture>
            <source 
              type="image/webp"
              srcset="${solarMobileWebp} 400w, ${solarSmallWebp} 640w, ${solarMediumWebp} 1280w, ${solarLargeWebp} 1920w"
              sizes="(min-width: ${screens.lg}) 50vw"
            >
            <source 
              type="image/jpg"
              srcset="${solarMobile} 400w, ${solarSmall} 640w, ${solarMedium} 1280w, ${solarLarge} 1920w"
              sizes="(min-width: ${screens.lg}) 50vw"
            >
            <img src=${solarSmall} alt="A close up of server racks" decoding="async"
              class="hero__image absolute right-0 top-0 opacity-0 h-full object-cover lg:h-full grayscale" 
            >
          </picture>
          <picture>
            <source 
              type="image/webp"
              srcset="${datacenterMobileWebp} 400w, ${datacenterSmallWebp} 640w, ${datacenterMediumWebp} 1280w, ${datacenterLargeWebp} 1920w"
              sizes="(min-width: ${screens.lg}) 50vw"
            >
            <source 
              type="image/jpg"
              srcset="${datacenterMobile} 400w, ${datacenterSmall} 640w, ${datacenterMedium} 1280w, ${datacenterLarge} 1920w"
              sizes="(min-width: ${screens.lg}) 50vw"
            >
            <img src=${datacenterSmall} alt="A close up of server racks" decoding="async"
              class="hero__image absolute right-0 top-0 opacity-0 h-full object-cover lg:h-full brightness-[50%] contrast-150 grayscale" 
            >
          </picture>`;

        imageWrapper.insertAdjacentHTML('beforeend', markup);

        this._setupImageSlider();
        // this._showSlide();


      });
    }

    _setupImageSlider() {
      // Set up slides
      this._slides = Array.from(document.querySelectorAll('.hero__image'));
      this._numSlides = this._slides.length;
      this._imageNavigation = document.querySelector('.image__navigation');

      this._startSlider();

      // Navigation listener
      this._imageNavigation.addEventListener('click', e => {
        const prevBtn = e.target.closest('.prev__btn');
        const nextBtn = e.target.closest('.next__btn');
        const navIcon = e.target.closest('.image-icon');
        const autoplayBtn = e.target.closest('.autoplay__btn');

        if(prevBtn) {
          this._prevSlide();
          this._autoPlay = false;
          this._turnAutoplayBtnOff();
        }
        if(nextBtn) {
          this._nextSlide();
        
          this._autoPlay = false;
          this._turnAutoplayBtnOff();
        }

        if(navIcon) {
          this._slideIndex = parseInt(e.target.dataset.id);
          this._showSlide()
          this._autoPlay = false;
          this._turnAutoplayBtnOff();
        }

        if(autoplayBtn) {
          if(this._autoPlay) this._timer.pause(0);
          else this._timer.play(0);

          this._autoPlay = !this._autoPlay;
          this._toggleAutoplayBtn();
        }
      });
    }

    _startSlider() {
      this._showSlide();
    }
}

export default Hero;