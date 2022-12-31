import View from '../View';

const icon1 = require('../../../assets/recycle-cropped.png');
const icon2 = require('../../../assets/settings-cropped.png');
const icon3 = require('../../../assets/solar-cropped.png');


class About extends View {
  _elementName = 'about';
  _parentElement;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName}">
        <div class="relative flex items-center bg-tertiary h-section py-24 sm:py-32 lg:py-24">
          <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
            <h2 class="text-lg font-semibold text-gray-500">Deploy faster</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>

            <div class="mt-20">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div class="pt-6">
                  <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <img src=${icon1} alt="" class="w-32 mx-auto" />
                        <!-- <span class="inline-flex items-center justify-center rounded-xl bg-primary p-3 shadow-lg">
                          <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                          </svg>
                        </span> -->
                      </div>
                      <h3 class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Push to Deploy</h3>
                      <p class="mt-5 text-base leading-7 text-gray-600">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <img src=${icon2} alt="" class="w-32 mx-auto" />

                        <!-- <span class="inline-flex items-center justify-center rounded-xl bg-primary p-3 shadow-lg">
                          <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </span> -->
                      </div>
                      <h3 class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">SSL Certificates</h3>
                      <p class="mt-5 text-base leading-7 text-gray-600">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <img src=${icon3} alt="" class="w-32 mx-auto" />

                       <!-- <span class="inline-flex items-center justify-center rounded-xl bg-primary p-3 shadow-lg">
                          <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                          </svg>
                        </span> -->
                      </div>
                      <h3 class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">Simple Queues</h3>
                      <p class="mt-5 text-base leading-7 text-gray-600">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
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
  }

  _setParentElement() {
    this._parentElement = document.querySelector('.index-view');
  }

}

export default About;