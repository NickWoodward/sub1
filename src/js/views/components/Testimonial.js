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

        <div class="bg-tertiary  flex items-end  justify-center h-4/6 xl:h-[65vh] pt-24 lg:pt-16 xl:pt-0">
          <div class="bg-primary w-full">
            <div class="max-w-xl mx-auto pb-24 px-4 xxs:pb-12 sm:pb-24 xxs:px-8 lg:relative lg:max-w-6xl xl:max-w-[1440px] xl:px-0 lg:z-10 lg:pb-0">
              <div class="relative w-full xxs:max-w-xl xs:mx-auto lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 ">
                <!--  Image Wrapper -->
                <div class="relative -mt-32 lg:-my-8 lg:pb-0">
                <!-- <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div> -->
                  <div class="mx-auto max-w-xl lg:h-full lg:p-0">
                    <div class="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl xs:aspect-w-16 xs:aspect-h-7 lg:aspect-none lg:h-full">
                      <div class="bg-slate-700 h-full">
                        <img class="object-cover opacity-60 brightness-[40%] grayscale lg:h-full lg:w-full -scale-x-100 " src="${testimonialImage}" alt="">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Content Wrapper -->
                <div class="flex flex-col justify-center mt-8 xxs:mt-0 xxs:absolute xxs:left-0 xxs:top-0 xxs:h-full xxs:justify-between xxs:pt-8 xxs:pb-12 xxs:px-10 lg:relative lg:justify-start lg:mt-0 lg:left-auto lg:top-auto lg:col-span-2 lg:pl-12">
                  <p class="mt-2 text-2xl px-4 xxs:px-0 xxs:text-3xl font-semibold tracking-tight text-primaryDark xxs:text-primary sm:font-medium lg:text-primaryDark lg:mt-8 lg:pl-10 xl:mt-16">Our Vision</p>

                  <div class="mx-auto max-w-md mt-6 px-4 xxs:px-0 xs:max-w-2xl lg:max-w-5xl lg:mt-0 lg:px-0 lg:pt-8 lg:pb-10">
                    <blockquote>
                      <div class="relative">
                        <svg class="absolute -top-6 -left-4 lg:left-0 h-12 w-12 text-white opacity-25 " fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p class="mt-2 text-xl  text-white lg:pl-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non repudiandae, molestiae perspiciatis nam delectus odit! Id officiis accusantium vel error aut nobis dignissimos, magnam doloribus repellat consequatur minus possimus recusandae quis laborum odit commodi architecto, praesentium natus sunt, dolorem vero enim ipsa illum! Voluptas saepe officiis error assumenda asperiores labore.</p>
                      </div>
                      <footer class="mt-6 lg:pl-10">
                        <p class="text-base font-medium text-white">Dominic Rumsey, 40</p>
                        <p class="text-base font-medium text-primaryDark xxs:text-primary lg:text-primaryDark">CEO at Sub1</p>
                      </footer>
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
  }

  _setParentElement() {
    this._parentElement = document.querySelector('.index-view');
  }
}

export default Testimonial;