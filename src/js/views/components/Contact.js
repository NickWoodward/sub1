import View from '../View';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { setDefaultFor } from '../../utils/validator';
import config from /* preval */ '../../../../tailwind.config';
const { theme: { screens } } = config;


class Contact extends View {
  _elementName = 'contact';
  _parentElement;
  _element;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }
 
  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} menu-section relative overflow-hidden  border-4 border-slate-100 bg-tertiary scroll-pt-header" id="${this._elementName}">
        <!-- Hero Content Wrapper-->
        <!-- <div class="relative h-full w-full bg-slate-700"> -->
        <div class="relative flex items-center h-full min-h-section max-w-xl mx-auto md:max-w-2xl lg:max-w-none lg:w-full lg:bg-white xl:px-12">

          <!-- Skewed Right-Element -->
          <div class="animated-bg-1 hidden lg:block absolute top-0 left-[40%] w-full h-full bg-slate-100 border-slate-100 border-l-8 skew-x-12"></div>
          <div class="animated-bg-2 hidden lg:block absolute top-0 left-[40%] w-full h-full bg-slate-200 border-slate-100 border-l-8 skew-x-12"></div>

          <!-- Contact Content -->
          <div class="mx-auto lg:max-w-6xl xl:max-w-[1440px] text-primary z-20 px-4 xxs:px-8 lg:px-0 xl:flex xl:items-center">

            <div class="relative lg:grid lg:grid-cols-6">
              <div class="contact-details pt-24 pb-16 lg:col-span-2 lg:mt-8 lg:px-8 lg:py-12 xl:pl-0 xl:pr-16">
                <div class="mx-auto ">
                  <h2 class="text-3xl font-semibold tracking-tight text-slate-700">Get in touch</h2>
                  <p class="mt-10 text-lg leading-6 text-gray-500">If you are interested in leasing or buying one of SUB1’s data centres, please submit your information and we will contact you</p>
                  <dl class="mt-8 text-base text-gray-700">
                    <!-- <div>
                      <dt class="sr-only">Postal address</dt>
                      <dd>
                        <p>44 Meadow Road</p>
                        <p>Reading</p>
                        <p>Berkshire</p>
                        <p>RG7 5RT</p>
                      </dd>
                    </div> 
                    <div class="mt-6">
                      <dt class="sr-only">Phone number</dt>
                      <dd class="flex">
                        <svg class="h-6 w-6 flex-shrink-0 text-primary" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span class="ml-3">0207 3748293</span>
                      </dd>
                    </div> -->
                    <div class="mt-3">
                      <dt class="sr-only">Email</dt>
                      <dd class="flex">
                        <!-- Heroicon name: outline/envelope -->
                        <svg class="peer h-6 w-6 flex-shrink-0 text-primary" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span class="ml-3"><a href="#" class="text-primary hover:text-primaryDark peer-hover:text-primaryDark underline underline-offset-4 ">Email</a></span>
                      </dd>
                    </div>
                  </dl>
                  <!-- <p class="mt-6 text-base text-gray-700">
                    Looking for careers?
                    <a href="#" class="font-medium pl-2 text-primary underline">View all job openings</a>.
                  </p> -->
                </div>
              </div>
              <!-- Contact Form -->
              <div id="contact-form" class="contact-form pb-24 pt-4 lg:col-start-4 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-12">
                <div class="mx-auto lg:max-w-none">
                  <form action="http://localhost:3550/email/" method="POST" spellcheck="false" class="grid grid-cols-1 gap-y-6">
                    <div class="name-wrapper relative flex flex-col xs:flex-row xs:justify-between">
                      <div class="form-item--default relative flex-1 xs:mr-6">
                        <label for="name" class="sr-only">Name</label>
                        <input type="text" name="name" id="name" autocomplete="name" class="block w-full rounded-md py-3 px-4 placeholder-gray-500 shadow-sm  focus:border-primary focus:ring-primary autofill:text-primary autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]" placeholder="Name">
                        <small class="absolute bottom-0 right-0 translate-y-full"></small>
                      </div>
                      <div class="form-item--default relative flex-1 mt-6 xs:mt-0">
                        <label for="surname" class="sr-only">Surname</label>
                        <input type="text" name="surname" id="surname" autocomplete="surname" class="block w-full rounded-md py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Surname">
                        <small class="absolute bottom-0 right-0 translate-y-full"></small>
                      </div>
                    </div>
                    <div class="form-item--default relative">
                      <label for="email" class="sr-only">Email</label>
                      <input id="email" name="email" type="email" autocomplete="email" class="email--contact block w-full rounded-md py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Email">
                      <small class="absolute bottom-0 right-0 translate-y-full"></small>
                    </div>
                    <div class="form-item--default relative">
                      <label for="phone" class="sr-only">Phone</label>
                      <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Phone">
                      <small class="absolute bottom-0 right-0 translate-y-full"></small>
                    </div>
                    <div class="form-item--default relative">
                      <label for="message" class="sr-only">Message</label>
                      <textarea id="message" name="message" rows="4" class="block w-full rounded-md py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Message"></textarea>
                      <small class="absolute bottom-0 right-0 translate-y-full"></small>  
                    </div>
                    <div class="form-item--default relative">
                      <label for="password" class="sr-only">Password</label>
                      <input id="password" type="text" name="password" autocomplete="off" class="block w-full rounded-md py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Password">                      
                      <small class="absolute bottom-0 right-0 translate-y-full"></small>  
                    </div>

                    <div class="relative flex justify-between">
                      <div class="">
                        <button type="submit" class="relative inline-flex justify-center w-28 h-12 rounded-md border border-transparent bg-primary py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          <p class="button__text">Submit</p>
                          <div class="loader loader--contact invisible absolute top-0 left-0 h-full w-full flex items-center justify-center rounded-md">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                              <rect class="fill-white" x="0" y="10" width="2" height="10" opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                              </rect>
                              <rect class="fill-white" x="8" y="10" width="2" height="10" fill="#333"  opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                              </rect>
                              <rect class="fill-white" x="16" y="10" width="2" height="10" fill="#333"  opacity="0.2">
                                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                              </rect>
                            </svg>
                          </div>
                          <div class="success-svg success-svg--contact invisible absolute top-0 left-0 h-full w-full flex items-center justify-center rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-3/4">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </button>
                      </div>

                      <!-- CLOUDFLARE -->
                      <div class="form-item--default relative rounded-md">
                        <label for="cloudflare" class="sr-only">Cloudflare Challenge</label>
                        <div id="cloudflare"></div>
                        <small class="absolute bottom-0 right-0 translate-y-full"></small>  
                      </div>                   
                    </div>
                  </form>
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
    this._element = document.querySelector(`.${this._elementName}`);

    const field = document.getElementById('password');
    const parent = field.parentElement;
    parent.style.display = 'none';
    parent.tabindex = -1;

  }

  _initAnimations() {
    const mm = gsap.matchMedia();
    const { lg } = screens;
    mm.add({
      mobile: `(max-width: ${parseInt(lg) - 1}px)`,
      desktop: `(min-width: ${lg})`
    }, (context) => {  
      const { mobile, desktop } = context.conditions;
      
      console.log({mobile}, {desktop});

      if(desktop) this._contactAnimation();
      // if(mobile) this._mobileContactAnimation();
    });
  }

  // addFormListeners(handler) {
  //   console.log('**********************************')
  //   this._parentElement.addEventListener('submit', handler);
  // };

  addFocusOutHandler(handler) {
    this._element.addEventListener('focusout', handler);
  };

  addFocusHandler(handler) {
    this._element.addEventListener('focusin', handler);
  };

  getSubmitInAnimation() {
    return gsap.timeline({defaults: {duration:.2}, paused: true })
      .to('.button__text', {
        autoAlpha: 0
      })
      .to('.loader', {
        autoAlpha: 1
      });
  };
  getSubmitOutAnimation(formObject) {
    return gsap.timeline({
      defaults: {duration:.2}, 
      paused: true,
      onComplete: () => {
        for(let [key, value] of Object.entries(formObject)) {
          if(key !== 'cf-turnstile-response') {
              const element = document.getElementById(key);
              element.value = '';
              setDefaultFor(element);
          } else {
            setDefaultFor(document.getElementById('cloudflare'));
          }
      }
      turnstile.reset();
      }
    })
      .to('.loader', {
        autoAlpha: 0
      })
      .to('.success-svg', {
        autoAlpha: 1
      })
      .fromTo('.success-svg', { autoAlpha:1 }, {
        immediateRender: false,
        autoAlpha: 0
      }, '>3')
      .to('.button__text', {
        autoAlpha: 1
      });
  };

  addLoader() {
    const button = this._element.querySelector('button[type="submit"]');
    // Clear the button text
    button.innerText = '';

    const markup = `
      <div class="loader loader--contact">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
          <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
            <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
    `;

    button.insertAdjacentHTML('afterbegin', markup);
  }
  removeLoader() {
    const button = this._element.querySelector('button[type="submit"]');
    button.innerHTML = '';
    button.innerText = 'Submit';

  }

  _contactAnimation() {
    const tl = gsap.timeline({ paused: true });
    tl.from('.animated-bg-1', {
      autoAlpha:0,
      xPercent: 10,
      duration: .8,
      ease: 'power4.out'
    })
    .from('.animated-bg-2', {
      autoAlpha:0,
      xPercent: 10,
      duration: .8,
      ease: 'power4.out'

    }, '< .6')
    .from('.contact-details', {
      autoAlpha: 0,
      x: -20,
      duration: 1.3,
      ease: 'power4.out'
    }, '<')
    .from('.contact-form', {
      autoAlpha: 0,
      x: 20,

      duration: 1.3,
      ease: 'power4.out'
    }, '<')


    ScrollTrigger.create({
      trigger: ".animated-bg-1",
      start: "top 80%",
      // markers:true,
      onEnter: () => tl.play()
    });
    ScrollTrigger.create({
      trigger: ".animated-bg-1",
      start: "top 110%",
      // markers:true,
      onLeaveBack: () => tl.pause(0)
    });
    // tl.from('.animated-bg-1', {
    //   autoAlpha:0,
    //   xPercent: 10,
    //   duration: .8,
    //   ease: 'power4.out'
    // })
    // .from('.animated-bg-2', {
    //   autoAlpha:0,
    //   xPercent: 10,
    //   duration: .8,
    //   ease: 'power4.out'

    // }, '< .6')
    // .from('.contact-details', {
    //   autoAlpha: 0,
    //   x: -20,
    //   duration: 2,
    //   ease: 'power4.out'
    // }, '<')
    // .from('.contact-form', {
    //   autoAlpha: 0,
    //   x: 20,

    //   duration: 2,
    //   ease: 'power4.out'
    // }, '<')


    // ScrollTrigger.create({
    //   trigger: ".animated-bg-1",
    //   start: "top 80%",
    //   // markers:true,
    //   onEnter: () => tl.play()
    // });
    // ScrollTrigger.create({
    //   trigger: ".animated-bg-1",
    //   start: "top 110%",
    //   // markers:true,
    //   onLeaveBack: () => tl.pause(0)
    // });
  }
}

export default Contact;