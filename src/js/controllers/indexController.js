import {gsap} from 'gsap';

import * as IndexModel from '../models/indexModel';
import IndexView from '../views/pages/IndexView';
import { getAdminContent, login, test } from '../api';

class IndexController {
    _IndexView;

    _data = {
        // companyName: null,
        // headerData: {},
        // dashboardData: [],
    }

    constructor() {
        //STEPS
        // 1: Get the data needed
        this._data = this.init();

        // 2: Instantiate the Views with the data
        this._IndexView = new IndexView(this._data);

        // 3: Render the html elements
        this._IndexView._render();

        // 4: Init Event Handlers
        this._initHandlers();

        gsap.to('body', {autoAlpha:1, duration: 1});

    }

    init() {
        return {
            companyName: IndexModel.getCompanyName(),
            headerData: IndexModel.getHeaderData(),
            dashboardData: IndexModel.getDashboardData()
        }
    }

    _initHandlers() {
        this._IndexView._Header.addMenuHandler((e) => {
            const burger = e.target.closest('.burger');
            const about = e.target.closest('#about-item');
            const testimonial = e.target.closest('#testimonial-item');
            const contact = e.target.closest('#contact-item');
            const login = e.target.closest('#login-item');

            const activeItem = about || testimonial || contact;

            if(burger)
                this._IndexView._Header.toggleMenu();
            if(activeItem){
                let element;
                switch(activeItem) {
                    case about: element = document.querySelector('.about'); console.log('about'); break;
                    case testimonial: element = document.querySelector('.testimonial'); console.log('testimonial'); break;
                    case contact: element = document.querySelector('.contact'); console.log('contact'); break;
                }
                element.scrollIntoView();       
            }

            if(login) {
                this._IndexView.Login._render();
            }
          
        });

        this._IndexView.addLoginHandler(async e => {
            const background = e.target.closest('.login__bg');
            const content = e.target.closest('.login__content');
            const submit = e.target.closest('.login__submit');


            if(background && !content) {
                console.log('closing login');
                background.parentElement.removeChild(background);
            }
        
            if(submit) {
                e.preventDefault();
                const credentials = this._IndexView.Login.getFormData();

                try {
                    const {status} = await login(credentials);

                    if(status === 200) {
                        this._IndexView.Login._redirect();
                    }
                } catch(err) {
                    // Req made, response outside of 2xx range
                    if(err.response) {
                        console.log('Error: Invalid request');
                    } else if(err.request) {
                        console.log('Error: No Response Received')
                    } else {
                        console.log('Error: Setting up Request');
                    }
                }
            }
        });
    }
}

const app = new IndexController();

