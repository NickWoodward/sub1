import View from '../View';

export default class Footer extends View {
  _elementName = 'footer';
  _parentElement;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();

  }

  _generateMarkup() {
    const markup = /*html*/`
      <footer class="w-full bg-slate-700 pt-4 px-8" aria-labelledby="footer-heading">
          <h2 id="footer-heading" class="sr-only">Footer</h2>
          <div class="flex flex-col sm:items-start mx-auto max-w-xl sm:max-w-7xl xl:max-w-[1440px]  px-8 sm:px-0 py-12 lg:py-16">
            <div class="inline-flex flex-col sm:w-full sm:justify-between sm:flex-row">
              <div class="col-1 flex flex-col">
                <div class="logo relative border-l-2 border-primary pl-3 text-white text-2xl tracking-tighter uppercase">Sub<span class="text-primary ml-2">1</span></div>
                <p class="text-base text-gray-200 mt-4">Hyper Efficient Edge Data Centres</p>
              </div>

              <div class="col-2 flex flex-col">

                <div class="flex flex-col mt-6 sm:mt-0 text-left sm:text-right md:flex-row md:space-x-6">
                  <div class="text-base text-gray-200 hover:text-gray-200 cursor-pointer">Concept</div>
                  <div class="text-base text-gray-200 hover:text-gray-200 cursor-pointer">Opportunity</div>
                  <div class="privacy-link--footer text-base text-gray-200 hover:text-gray-200 cursor-pointer">Privacy Policy</div>
                </div>

                <div class="flex space-x-3 mt-8 sm:space-x-6 sm:ml-auto sm:mt-4">
                    <a href="#" class="text-gray-200 hover:text-gray-500">
                      <span class="sr-only">Facebook</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                      </svg>
                    </a>
          
                    <a href="#" class="text-gray-200 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                </div>

              </div>
            </div>
            <div class="inline-flex pt-2 sm:pt-0 md:flex md:w-full md:pt-3 mt-6 sm:mt-0">
              <p class="text-base text-gray-200 md:text-center">&copy; 2023 SUB1. All rights reserved.</p>
            </div>
          <!--  <div class="xl:grid xl:grid-cols-3 xl:gap-8">
              <div class="space-y-8 xl:col-span-1">
              <div class="logo relative border-l-2 border-primary pl-3 text-white text-2xl tracking-tighter uppercase">Sub<span class="text-primary ml-2">1</span></div>
              <p class="text-base text-gray-200">Hyper Efficient Edge Data Centres</p>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-200 hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                  </a>
        
                  <a href="#" class="text-gray-200 hover:text-gray-500">
                    <span class="sr-only">Twitter</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
        
              
                </div>
              </div>

              <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div class="sm:grid sm:grid-cols-2 sm:gap-8">
                  <div>
                    <h3 class="text-base font-medium text-gray-200">Solutions</h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Marketing</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Analytics</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Commerce</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Insights</a>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-12 sm:mt-0">
                    <h3 class="text-base font-medium text-gray-200">Support</h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Pricing</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Guides</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">API Status</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sm:grid sm:grid-cols-2 sm:gap-8">
                  <div>
                    <h3 class="text-base font-medium text-gray-200">Company</h3>
                    <ul role="list" class="mt-4 space-y-4">
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">About</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Our Vision</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Contact Us</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Press</a>
                      </li>
        
                    </ul>
                  </div>
                  <div class="mt-12 sm:mt-0">
                    <h3 class="text-base font-medium text-gray-200">Legal</h3>
                    <ul role="list" class="mt-4 space-y-4">
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Privacy</a>
                      </li>
        
                      <li>
                        <a href="#" class="text-base text-gray-200 hover:text-gray-200">Terms</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-12 border-t border-gray-200 pt-8">
              <p class="text-base text-gray-200 xl:text-center">&copy; 2023 SUB1. All rights reserved.</p>
            </div> -->
          </div>
      </footer>
    `;

    return markup;
  }

  _render() {
    this._setParentElement();
    super._render();
  }

  _setParentElement() {
    this._parentElement = document.querySelector('.index-view');
  }
}