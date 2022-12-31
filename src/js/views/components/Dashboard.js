import View from '../View';

class Dashboard extends View {
    _elementName = 'dashboard';
    _parentSelector = '.'

    constructor(data) {
        super(data);
    }

    _generateMarkup() {
        const markup = `
            <div class="${this._elementName}">

            </div>;
        `;

        return markup;
    }
}

export default Dashboard;