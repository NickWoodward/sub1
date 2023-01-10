import View from '../View';

const datacenter = require('../../../assets/datacenter.jpg');

const heroImages = [datacenter, null, null];


class Hero extends View {
    _elementName = 'hero';
    _parentElement;

    constructor(data) {
        super(data);
        this._data.markup = this._generateMarkup();
    }

    _generateMarkup() {
      const markup = /*html*/`
        <div class="${this._elementName} relative mt-[var(--header-height)] h-section overflow-hidden">
          <!-- Hero Content Wrapper-->
          <div class="relative h-full w-full bg-white before:hidden before:absolute before:bg-white before:w-4/6 before:lg:block xl:before:w-3/5 before:h-full before:border-primary before:border-r-8 before:-skew-x-12 before:z-10 ">
            <!-- The Bg Image -->
            <div class="absolute top-0 right-0 h-full w-full bg-slate-700  ml-auto object-cover lg:w-4/5 lg:h-full " > </div>
            <img class="h-full  ml-auto object-cover lg:w-4/5 lg:h-full opacity-60 brightness-[40%] grayscale" src=${datacenter} alt="">

            <!-- Image Navigation -->
            <div class="absolute right-0 bottom-0 flex">
              ${heroImages.map((img, index) => this._createHeroNavigationIcon(index))}
            </div>

            <!-- Hero Content -->
            <!--<div class="absolute container top-1/2 left-1/2 -translate-y-[58%] -translate-x-1/2 text-primary z-20">-->
            <div class="absolute w-full max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-[1400px] top-1/2 left-1/2 -translate-y-[58%] -translate-x-1/2 px-4 xxs:px-8 lg:px-0 text-primary z-20">

              <main class="lg:px-2 lg:w-1/2 xl:px-0 xl:pl-12">
                <div class=" md:text-left">
                  <h1>
                    <div>
                      <a href="#" class="inline-flex space-x-4 mb-2">
                        <span class="inline-flex items-center space-x-1 text-lg font-semibold text-slate-400 lg:text-gray-500">
                          <span>Just shipped version 0.1.0</span>
                          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </a>
                    </div>

                    <!-- <span class="block text-base font-semibold text-gray-500 xs:text-lg lg:text-base xl:text-lg">Coming soon</span> -->
                    <span class="mt-1 block text-3xl xxs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl">
                      <span class="block text-2xl xxs:text-3xl font-semibold tracking-tight text-slate-300 lg:text-slate-700">Create, Lease and Sell</span>
                      <span class="block mt-2 text-primary font-semibold">Hyper Efficient Edge Data Centers</span>
                    </span>
                  </h1>
                  <p class="mt-3 text-base text-slate-200 xs:mt-5 xs:text-xl lg:text-lg lg:text-gray-500 xl:text-2xl">Explore our sustainable and efficient cloud infrastructure</p>
                  <div class="mt-8 xs:max-w-lg  md:text-left md:mx-0 lg:text-left lg:max-w-lg">
                    <p class="text-base font-medium lg:text-gray-900">Sign up to get notified when it’s ready.</p>
                    <form action="#" method="POST" class="mt-3 xs:flex xs:flex-row sm:w-full  sm:flex-row">
                      <label for="email" class="sr-only">Email</label>
                      <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary xs:flex-1" placeholder="Enter your email">
                      <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center xs:justify-center xs:mt-0 xs:ml-3">Notify me</button>
                    </form>
                    <p class="mt-3 text-sm text-slate-300  xs:mt-3 md:mx-0 lg:text-gray-500">
                      We care about the protection of your data. Read our
                      <a href="#" class="font-medium lg:text-gray-900 underline">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </main>
            
            </div>
          </div>
        </div>
      `;


  //     const markup = /*html*/`
  //   <div class="${this._elementName} relative top-[var(--header-height)] h-hero overflow-hidden bg-white">
  //     <div class="relative flex w-full h-5/6 overflow-hidden bg-white border border-red">
  //     <div class="max-w-7xl border border-primary">
  //       <div class="relative z-10 bg-white pb-8 xs:pb-16 sm:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
  //         <!--<svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-primary lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
  //           <polygon points="50,0 100,0 50,100 0,100" />
  //         </svg>
  //   -->
          
    
  //           <!--
  //             Mobile menu, show/hide based on menu open state.
    
  //             Entering: "duration-150 ease-out"
  //               From: "opacity-0 scale-95"
  //               To: "opacity-100 scale-100"
  //             Leaving: "duration-100 ease-in"
  //               From: "opacity-100 scale-100"
  //               To: "opacity-0 scale-95"
  //           -->
  //           <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition sm:hidden">
  //             <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
  //               <div class="flex items-center justify-between px-5 pt-4">
  //                 <div>
  //                   <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
  //                 </div>
  //                 <div class="-mr-2">
  //                   <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
  //                     <span class="sr-only">Close main menu</span>
  //                     <!-- Heroicon name: outline/x-mark -->
  //                     <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
  //                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  //                     </svg>
  //                   </button>
  //                 </div>
  //               </div>
  //               <div class="space-y-1 px-2 pt-2 pb-3">
  //                 <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Product</a>
    
  //                 <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Features</a>
    
  //                 <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Marketplace</a>
    
  //                 <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Company</a>
  //               </div>
  //               <a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</a>
  //             </div>
  //           </div>
    
  //         <main class="mx-auto mt-10 max-w-7xl px-4 xs:mt-12 xs:px-6 sm:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
  //           <div class="xs:text-center sm:mx-auto sm:max-w-2xl lg:col-span-6 lg:text-left">
  //             <h1>
  //               <span class="block text-base font-semibold text-gray-500 xs:text-lg lg:text-base xl:text-lg">Coming soon</span>
  //               <span class="mt-1 block text-4xl xs:text-5xl xl:text-6xl">
  //                 <span class="block text-gray-700 xl:text-3xl font-medium">Create, Lease and Sell</span>
  //                 <span class="block mt-2 text-primary font-semibold">Hyper Efficient Edge Data Centers</span>
  //               </span>
  //             </h1>
  //             <p class="mt-3 text-base text-gray-500 xs:mt-5 xs:text-xl lg:text-lg xl:text-2xl">Explore our sustainable and efficient </p>
  //             <div class="mt-8 xs:mx-auto xs:max-w-lg xs:text-center lg:mx-0 lg:text-left">
  //               <p class="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
  //               <form action="#" method="POST" class="mt-3 xs:flex">
  //                 <label for="email" class="sr-only">Email</label>
  //                 <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xs:flex-1" placeholder="Enter your email">
  //                 <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 xs:mt-0 xs:ml-3 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center">Notify me</button>
  //               </form>
  //               <p class="mt-3 text-sm text-gray-500">
  //                 We care about the protection of your data. Read our
  //                 <a href="#" class="font-medium text-gray-900 underline">Privacy Policy</a>.
  //               </p>
  //             </div>
  //           </div>
  //         </main>
  //       </div>
  //     </div>
  //     <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
  //       <img class="h-56 w-full object-cover xs:h-72 sm:h-96 lg:h-full lg:w-full" src=${datacenter} alt="">
  //     </div>
  //   </div>
  // </div>
    
  //     `;




        // const markup = /*html*/`
        //   <div class="${this._elementName} relative top-[var(--header-height)] h-hero overflow-hidden bg-white">

        //     <!-- The Pattern Wrapper -->
        //     <div class="hidden lg:absolute lg:inset-0 lg:block" aria-hidden="true">
        //       <!--<svg class="absolute top-0 left-1/2 translate-x-64 -translate-y-8 transform" width="640" height="784" fill="none" viewBox="0 0 640 784"> -->
        //       <svg class="absolute top-0 left-1/2 translate-x-[27rem] -translate-y-12 transform" width="640" height="784" fill="none" viewBox="0 0 640 784">

        //         <defs>
        //           <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        //             <rect x="0" y="0" width="4" height="4" class="text-gray-300" fill="currentColor" />
        //           </pattern>
        //         </defs>
        //         <rect y="72" width="640" height="640" class="text-gray-100" fill="currentColor" />
        //         <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        //       </svg>
        //     </div>
          
        //     <!-- The Content Wrapper -->
        //     <div class="relative h-full flex justify-center items-center border-2">
              
        //       <!-- Content Wrapper --> 
        //       <main class="mx-auto max-w-full px-4 xs:px-6">
        //       <!-- Content -->
        //         <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        //           <!-- Hero Text -->
        //           <div class="xs:text-center sm:mx-auto sm:max-w-2xl lg:col-span-6 lg:text-left">
        //             <h1>
        //               <span class="block text-base font-semibold text-gray-500 xs:text-lg lg:text-base xl:text-lg">Coming soon</span>
        //               <span class="mt-1 block text-4xl xs:text-5xl xl:text-6xl">
        //                 <span class="block text-gray-700 xl:text-3xl font-medium">Create, Lease and Sell</span>
        //                 <span class="block mt-2 text-primary font-semibold">Hyper Efficient Edge Data Centers</span>
        //               </span>
        //             </h1>
        //             <p class="mt-3 text-base text-gray-500 xs:mt-5 xs:text-xl lg:text-lg xl:text-2xl">Explore our sustainable and efficient </p>
        //             <div class="mt-8 xs:mx-auto xs:max-w-lg xs:text-center lg:mx-0 lg:text-left">
        //               <p class="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
        //               <form action="#" method="POST" class="mt-3 xs:flex">
        //                 <label for="email" class="sr-only">Email</label>
        //                 <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 xs:flex-1" placeholder="Enter your email">
        //                 <button type="submit" class="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 xs:mt-0 xs:ml-3 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center">Notify me</button>
        //               </form>
        //               <p class="mt-3 text-sm text-gray-500">
        //                 We care about the protection of your data. Read our
        //                 <a href="#" class="font-medium text-gray-900 underline">Privacy Policy</a>.
        //               </p>
        //             </div>
        //           </div>
        //           <!-- Hero Image -->
        //           <div class="relative mt-12 xs:mx-auto xs:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
        //             <svg class="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform xs:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
        //               <defs>
        //                 <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        //                   <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        //                 </pattern>
        //               </defs>
        //               <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
        //               <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
        //             </svg>
        //             <div class="relative mx-auto w-full rounded-lg shadow-xl lg:max-w-xl">
        //               <button type="button" class="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        //                 <span class="sr-only">Watch our video to learn more</span>
        //                 <!--<img class="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">-->
        //                 <img src="${datacenter}" alt="" className="w-full" />
        //                 <span class="absolute inset-0 flex h-full w-full items-center justify-center" aria-hidden="true">
        //                   <svg class="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
        //                     <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
        //                     <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
        //                   </svg>
        //                 </span>
        //               </button>
        //             </div>
        //           </div>
        //         </div>
        //       </main>
        //     </div>

        // `;

        return markup;
    }

    _render() {
      this._setParentElement();
      super._render();
    }

    _setParentElement() {
      this._parentElement = document.querySelector('.index-view');
    }

    _createHeroNavigationIcon(index) {
      return (`
        <div class="image-icon-${index} w-5 h-5 mb-4 mr-3 bg-primary border-2 border-white rounded-full"></div>
      `);
    }
}

export default Hero;