import View from '../View';

export default class Header extends View {
  _elementName = 'header';
  _parentElement;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
    const markup = /*html*/`
      <div class="${this._elementName} fixed flex items-center justify-center w-full h-header bg-slate-700 shadow-2xl z-30">
        <div class="container flex justify-between w-full">
          <div class="logo relative border-l-2 border-primary pl-3 text-white text-3xl tracking-tighter uppercase">Sub<span class="text-primary ml-2">1</span></div>
        
          <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class=" border-b border-menuSelected px-3 py-2 text-sm font-medium text-white">About</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-menuSelected hover:text-white">Meet the Team</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-menuSelected hover:text-white">Contact Us</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-menuSelected hover:text-white">Log In</a>
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