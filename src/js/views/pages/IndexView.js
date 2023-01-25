import '../../../css/main.css';

import View from '../View';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Login from '../components/Login';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonial from '../components/Testimonial';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class IndexView extends View {
    _elementName;
    _parentElement = document.querySelector('.app');

    // View Sections
    _Header;
    Login;
    _Hero;
    _Dashboard;
    _About;
    _Testimonial;
    _FAQs;
    _Footer;

    constructor(data) {
        super(data);
        this._elementName = 'index-view';
        this._data.markup = this._generateMarkup();

        const {dashboardData} = data;
        this._Dashboard = new Dashboard(dashboardData);

        this._Header = new Header(data.headerData);
        this.Login = new Login({page: 'home'});
        this._Hero = new Hero({});
        this._About = new About({});
        this._Testimonial = new Testimonial({});
        this._FAQs = new FAQs({});
        this._Contact = new Contact({});
        this._Footer = new Footer({});
    }

    _generateMarkup() {
        const markup = /*html*/`
            <div class="${this._elementName} relative bg-tertiary overflow-hidden"></div>
        `;

        return markup;
    }

    _render() {
        super._render();
        this._Header._render(this._elementName);
        this._Hero._render();
        this._About._render();
        this._Testimonial._render();
        this._FAQs._render();
        this._Contact._render();
        this._Footer._render();
    }

    addLoginHandler(handler) {
        console.log('adding index handler');
        this._parentElement.addEventListener('click', handler);
    }

}

export default IndexView;