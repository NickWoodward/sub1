import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

import '../../../css/main.css';

import View from '../View';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Login from '../components/Login';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Hero from '../components/Hero';
import About from '../components/About';
import Opportunity from '../components/Opportunity';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { debounce } from '../../utils/helper';

class IndexView extends View {
    _elementName;
    _parentElement = document.querySelector('.app');

    // View Sections
    _Header;
    Login;
    _PrivacyPolicy;
    _Hero;
    _Dashboard;
    _About;
    _Opportunity;
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
        this._PrivacyPolicy = new PrivacyPolicy({});
        this._Hero = new Hero({});
        this._About = new About({});
        this._Opportunity = new Opportunity({});
        this._FAQs = new FAQs({});
        this._Contact = new Contact({});
        this._Footer = new Footer({});

        this._menuScrollTrigger = true;
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
        this._Opportunity._render();
        this._FAQs._render();
        this._Contact._render();
        this._Footer._render();
        this._addHandlers();
        this._handleScrollMenuChange();
    }

    addLoginHandler(handler) {
        this._parentElement.addEventListener('click', handler);
    }

    _addHandlers() {
        this._addClickHandler();
        this._addResizeHandler();
    }
    _addClickHandler() {
        this._parentElement.addEventListener('click', (e) => {
            // e.preventDefault();

            const privacyLink = e.target.closest('.privacy-link') || e.target.closest('.privacy-link--footer');
            if(privacyLink) {
                this._PrivacyPolicy._render();
                this._PrivacyPolicy.addCloseHander(() => this._closePrivacyPolicy(e));
            }

            // Always close burger unless burger is clicked
            if(!e.target.closest('.burger') && this._Header._isOpen()) this._Header.closeMenu(); 
        });
    }
    _addResizeHandler() {
        window.addEventListener('resize', (e) => {
            debounce(this._Header.closeMenu());
        })
    }
    addSubmissionHandler(handler) {
        this._parentElement.addEventListener('submit', handler)

    }

    _closePrivacyPolicy(e) {
        const privacyPolicy = e.target.closest('.privacy-policy__content');

        if(!privacyPolicy) {
            this._PrivacyPolicy.removeSelf();
        }
    }

    _handleScrollMenuChange() {
        const sections = gsap.utils.toArray(".menu-section");
        const menuItems = Array.from(document.querySelectorAll('.menu__item'));
        const sectionsMap = new Map();

        sections.forEach((section, index) => sectionsMap.set(section, menuItems[index]));

        this._sectionTriggers = sections.map((section, i) => {
            const scrollTrigger = ScrollTrigger.create({
                trigger: section,
                start: "top center",
                onEnter: () => this._Header.setActiveItem(sectionsMap.get(sections[i])),
                onLeaveBack: () => this._Header.setActiveItem(sectionsMap.get(sections[i - 1])),
            });
            return scrollTrigger;
        });
    }
 
}

export default IndexView;