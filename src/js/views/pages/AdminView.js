import '../../../css/main.css';

import View from '../View';
import Header from '../components/Header';

export default class AdminView extends View {
  _elementName;
  _parentElement = document.querySelector('.app');
  _Header;


  constructor(data) {
    super(data);
    this._elementName = 'admin-view';
    this._data.markup = this._generateMarkup();

    this._Header = new Header(data.headerData);

  }

  _generateMarkup() {
    console.log('generating');
    const markup = /*html*/`
        <div class="${this._elementName} relative bg-tertiary h-screen overflow-hidden"></div>
    `;

    return markup;
}

  _render() {
    super._render();
    console.log('rendering');
    this._Header._render(this._elementName);
    
  }

}