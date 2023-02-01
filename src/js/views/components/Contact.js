import View from '../View';

import map from '../../../assets/map.png';

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import config from /* preval */ '../../../../tailwind.config';
const { theme: { screens } } = config;

class Contact extends View {
  _elementName = 'contact';
  _parentElement;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }
 
  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} relative overflow-hidden border-4 border-slate-100 bg-tertiary" id="${this._elementName}">
        <!-- Hero Content Wrapper-->
        <!-- <div class="relative h-full w-full bg-slate-700"> -->
        <div class="relative h-full xl:h-[90vh] max-w-xl mx-auto md:max-w-2xl lg:max-w-none lg:w-full lg:bg-white">

          <!--<img class="h-full w-full mr-auto object-cover lg:h-full mix-blend-soft-light brightness-[55%] opacity-70 grayscale" src=${map} alt=""> -->
          <!-- <img class="h-full w-full mr-auto object-cover lg:h-full mix-blend-multiply brightness-[75%] grayscale" src=${map} alt=""> -->



          <!-- Skewed Right-Element -->
          <div class="animated-bg-1 hidden lg:block absolute top-0 left-[40%] w-full h-full bg-slate-100 border-slate-100 border-l-8 skew-x-12"></div>
          <div class="animated-bg-2 hidden lg:block absolute top-0 left-[40%] w-full h-full bg-slate-200 border-slate-100 border-l-8 skew-x-12"></div>

          <!-- Contact Content -->
          <div class="mx-auto lg:max-w-6xl xl:max-w-[1440px] text-primary z-20 px-4 xxs:px-8 lg:px-0 xl:flex xl:items-center xl:h-full">

            <div class="relative  lg:grid lg:grid-cols-6">
              <div class="contact-details pt-24 pb-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div class="mx-auto">
                  <h2 class="text-3xl font-semibold tracking-tight text-slate-700">Get in touch</h2>
                  <p class="mt-3 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.</p>
                  <dl class="mt-8 text-base text-gray-700">
                    <div>
                      <dt class="sr-only">Postal address</dt>
                      <dd>
                        <p>742 Evergreen Terrace</p>
                        <p>Springfield, OR 12345</p>
                      </dd>
                    </div>
                    <div class="mt-6">
                      <dt class="sr-only">Phone number</dt>
                      <dd class="flex">
                        <!-- Heroicon name: outline/phone -->
                        <svg class="h-6 w-6 flex-shrink-0 text-gray-700" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span class="ml-3">+1 (555) 123-4567</span>
                      </dd>
                    </div>
                    <div class="mt-3">
                      <dt class="sr-only">Email</dt>
                      <dd class="flex">
                        <!-- Heroicon name: outline/envelope -->
                        <svg class="h-6 w-6 flex-shrink-0 text-gray-700" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span class="ml-3">support@example.com</span>
                      </dd>
                    </div>
                  </dl>
                  <p class="mt-6 text-base text-gray-700">
                    Looking for careers?
                    <a href="#" class="font-medium pl-2 text-primary underline">View all job openings</a>.
                  </p>
                </div>
              </div>
              <!-- Contact Form -->
              <div class="contact-form pb-24 pt-4 lg:col-start-4 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div class="mx-auto lg:max-w-none">
                  <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
                    <div>
                      <label for="full-name" class="sr-only">Full name</label>
                      <input type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Full name">
                    </div>
                    <div>
                      <label for="email" class="sr-only">Email</label>
                      <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Email">
                    </div>
                    <div>
                      <label for="phone" class="sr-only">Phone</label>
                      <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Phone">
                    </div>
                    <div>
                      <label for="message" class="sr-only">Message</label>
                      <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary" placeholder="Message"></textarea>
                    </div>
                    <div>
                      <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-primary py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Submit</button>
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
      
      console.log({mobile}, {desktop});

      if(desktop) this._contactAnimation();
      // if(mobile) this._mobileContactAnimation();
    });
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
      duration: 2,
      ease: 'power4.out'
    }, '<')
    .from('.contact-form', {
      autoAlpha: 0,
      x: 20,

      duration: 2,
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
  }
}

export default Contact;