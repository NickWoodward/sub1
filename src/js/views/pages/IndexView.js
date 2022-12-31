import '../../../css/main.css';

import View from '../View';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

class IndexView extends View {
    _elementName;
    _parentElement = document.querySelector('.app');
    _currentElement;

    // View Sections
    _Header;
    _Hero;
    _Dashboard;
    _About;
    _Testimonial;

    constructor(data) {
        super(data);
        this._elementName = 'index-view';
        this._data.markup = this._generateMarkup();

        const {dashboardData} = data;
        this._Dashboard = new Dashboard(dashboardData);

        this._Header = new Header({page: 'home'});
        this._Hero = new Hero({});
        this._About = new About({});
        this._Testimonial = new Testimonial({});
        this._Contact = new Contact({});
    }

    _generateMarkup() {
        const markup = /*html*/`
            <div class="${this._elementName} relative bg-tertiary overflow-hidden"></div>
        `;

        return markup;
    }

    _render() {
        super._render();
        this._Header._render();
        this._Hero._render();
        this._About._render();
        this._Testimonial._render();
        // this._Contact._render();
    }

}

export default IndexView;