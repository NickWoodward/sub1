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
            // Needed to allow scrollIntoView
            e.preventDefault();
            const burger = e.target.closest('.burger');
            const logoLink = e.target.closest('.logo');
            const aboutLink = e.target.closest('#about-item');
            const aboutMobileLink = e.target.closest('#about-mobile-item');
            const testimonialLink = e.target.closest('#testimonial-item');
            const testimonialMobileLink = e.target.closest('#testimonial-mobile-item');
            const contactLink = e.target.closest('#contact-item');
            const contactMobileLink = e.target.closest('#contact-mobile-item');
            const loginLink = e.target.closest('#login-item');
            const loginMobileLink = e.target.closest('#login-mobile-item');

            const activeItem = 
                logoLink || aboutLink || testimonialLink || contactLink  ||
                aboutMobileLink || testimonialMobileLink || contactMobileLink;
                
            if(burger)
                this._IndexView._Header.toggleMenu();
            if(activeItem){
                let element;
                
                switch(activeItem) {
                    case logoLink: {
                        element = document.getElementById('hero');
                        element.scrollIntoView({block:'end'});       
                        // this._IndexView._Header.setActiveItem('hero-item');
                        break;
                    }
                    case aboutLink: {
                        element = document.getElementById('about'); 
                        element.scrollIntoView({block:'end'});    
                        // this._IndexView._Header.setActiveItem('about-item');   
                        break;
                    }
                    case aboutMobileLink: {
                        element = document.getElementById('about');
                        element.scrollIntoView(true);    
                        // this._IndexView._Header.setActiveItem('about-mobile'); 
                        break;
                    }
                    case testimonialLink: {
                        element = document.getElementById('testimonial'); 
                        element.scrollIntoView();    
                        // this._IndexView._Header.setActiveItem('testimonial-item');   
                        break;
                    }
                    case testimonialMobileLink: {
                        element = document.getElementById('testimonial');
                        element.scrollIntoView({block:'end'});    
                        // this._IndexView._Header.setActiveItem('testimonial-mobile'); 
                         
                        break;
                    }
                    case contactLink: {
                        element = document.getElementById('contact'); 
                        element.scrollIntoView({block:'end'});    
                        // this._IndexView._Header.setActiveItem('contact-item');   
                        break;
                    }
                    case contactMobileLink: {
                        element = document.getElementById('contact'); 
                        element.scrollIntoView({block:'end'});    
                        // this._IndexView._Header.setActiveItem('contact-mobile');   
                        break;
                    }
                }
            } 

            if(loginLink || loginMobileLink) {
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

