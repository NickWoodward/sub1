import View from '../View';

export default class FAQs extends View {
  _elementName = 'faqs';
  _parentElement;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} relative  overflow-hidden border-b-2 border-slate-200">

        <section aria-labelledby="faq-heading" class="bg-white py-24">
          <div class="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="max-w-xl">
              <h2 id="faq-heading" class="text-3xl font-semibold tracking-tight text-slate-700">Frequently asked questions</h2>
              <p class="mt-4 text-xl text-gray-500">If you can't find what you're looking for, you can always <a href="#" class="font-medium text-primary hover:text-primaryLight">send us an email</a> with your enquiry.</p>
            </div>
        
            <dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
              <div>
                <dt class="text-base font-medium text-gray-900">What&#039;s the best thing about Switzerland?</dt>
                <dd class="mt-3 text-base text-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
              </div>
              <div>
                <dt class="text-base font-medium text-gray-900">What&#039;s the best thing about Switzerland?</dt>
                <dd class="mt-3 text-base text-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
              </div>
              <div>
                <dt class="text-base font-medium text-gray-900">What&#039;s the best thing about Switzerland?</dt>
                <dd class="mt-3 text-base text-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
              </div>
              <div>
              <dt class="text-base font-medium text-gray-900">What&#039;s the best thing about Switzerland?</dt>
              <dd class="mt-3 text-base text-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
            </div>
            <div>
              <dt class="text-base font-medium text-gray-900">What&#039;s the best thing about Switzerland?</dt>
              <dd class="mt-3 text-base text-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
            </div>
            
            </dl>
          </div>
        </section>
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