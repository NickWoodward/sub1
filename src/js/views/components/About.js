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
            <h2 class="text-lg font-semibold text-primary">Deploy smarter</h2>
            <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-700">Lorem ipsum dolor sit, amet consectetur</p>

            <!--<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lorem ipsum dolor sit, amet consectetur</p> -->
            <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis adipisci quo minus, dicta eveniet itaque unde vel eius? Eum, quae.</p>

            <div class="mt-20">
              <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div class="pt-6">
                  <div class="flow-root  min-h-[332px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <img src=${icon1} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">Adipisicing</h3>
                      <p class="mt-5 text-base leading-7 text-gray-600">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root  min-h-[332px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <img src=${icon2} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">Lorem ipsum</h3>
                      <p class="mt-5 text-base leading-7 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id esse odio adipisci sunt nisi dolor minima corporis recusandae! Aspernatur.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root  min-h-[332px] shadow-sm rounded-lg bg-gray-50 px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <img src=${icon3} alt="" class="w-32 mx-auto" />
                      </div>
                      <h3 class="mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">Voluptate id</h3>
                      <p class="mt-5 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ut magni? Veniam autem harum excepturi fuga tempore inventore.</p>
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