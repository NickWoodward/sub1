import View from '../View';
const testimonialImage = require('../../../assets/testimonial.jpg');

class Testimonial extends View {
  _elementName = 'testimonial';
  _parentElement;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName}">

        <div class="bg-tertiary flex items-end justify-center h-4/6 pt-16">
          <div class="bg-primary w-full pb-16 lg:relative lg:z-10 lg:pb-0">
            <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <!--  Image Wrapper -->
              <div class="relative lg:-my-8">
                <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
                <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                  <div class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img class="object-cover lg:h-full lg:w-full -scale-x-100" src="${testimonialImage}" alt="">
                  </div>
                </div>
              </div>
              <!-- Content Wrapper -->
              <div class="flex flex-col justify-center lg:col-span-2 lg:pl-12 ">
                <p class="mt-2 text-3xl font-semibold tracking-tight text-primaryDark lg:pl-10">Lorem ipsum dolor sit amet.</p>

                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-10">
                  <blockquote>
                    <div class="relative">
                      <svg class="absolute -top-6 left-0 h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p class="mt-2 text-xl font-medium text-white lg:pl-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                    </div>
                    <footer class="mt-6 lg:pl-10">
                      <p class="text-base font-medium text-white">Dominic Rumsey, 40</p>
                      <p class="text-base font-medium text-primaryDark">CEO at Sub1</p>
                    </footer>
                  </blockquote>
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

export default Testimonial;