import {gsap} from 'gsap';

import * as IndexModel from '../models/indexModel';
import IndexView from '../views/pages/IndexView';
import { sendEmail, getAdminContent, login, test } from '../api';
import { validateContact, validateContactProperty, setErrorFor, setSuccessFor, setDefaultFor } from '../utils/validator';
import { sleep } from '../utils/helper';
import { SITE_KEY } from '../config';

class IndexController {
    _IndexView;
    _challengeToken;

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
        // Handlers here rely on (or are likely to rely on) model data
        // Otherwise they're in the relevant view

        this._IndexView._Header.addMenuHandler((e) => {
            // Needed to allow scrollIntoView
            e.preventDefault();
            const burger = e.target.closest('.burger');
            const logoLink = e.target.closest('.logo');
            const aboutLink = e.target.closest('#concept-item');
            const aboutMobileLink = e.target.closest('#concept-mobile-item');
            const testimonialLink = e.target.closest('#opportunity-item');
            const testimonialMobileLink = e.target.closest('#opportunity-mobile-item');
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
                // Nav item clicked, turn off the scrollTriggers that control the active menu
                this._IndexView.toggleMenuScrollTrigger()
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

                this._IndexView.toggleMenuScrollTrigger()

            } 

            if(loginLink || loginMobileLink) {
                this._IndexView.Login._render();
            }
          
        });

        window.onloadTurnstileCallback = () => {
            turnstile.render('#cloudflare', {
                sitekey: SITE_KEY,
                'timeout-callback': ()=>{turnstile.reset()},
                'error-callback': ()=>{console.log('error'); turnstile.reset()},

                callback: (token) => { 
                    this._challengeToken = token;
                }
            });        
        }

        turnstile.ready(onloadTurnstileCallback);

        this._IndexView.addSubmissionHandler(async(e) => {
            e.preventDefault();
            
            // 2 Forms on the index page
            const heroForm = e.target.closest(`.${this._IndexView._Hero._elementName}`);
            const contactForm = e.target.closest(`.${this._IndexView._Contact._elementName}`);

            const formData = new FormData(e.target);
            const formObject = Object.fromEntries(formData);

            try {
                if(contactForm) {
                    const tlIn = this._IndexView._Contact.getSubmitInAnimation();
                    const tlOut = this._IndexView._Contact.getSubmitOutAnimation(formObject);

                    let errors = validateContact(formObject);
                    if(!this._challengeToken) {
                        console.log('ERROR: Challenge Failed');
                        const message = 'Please verify you are human';
                        // If no other errors, create a new object
                        if(errors) errors.cloudflare = message;
                        else errors = { cloudflare: message }
                    }

                    if(!errors) {
                        tlIn.play(0);

                        // SET THE FIELDS' SUCCESS STATE
                        for(let [key, value] of Object.entries(formObject)) {
                            if(key !== 'cf-turnstile-response') {
                                setSuccessFor(document.getElementById(key))
                            }
                        }

                        const res = await sendEmail(formObject);

                        // RESET THE FORM
                        if(res.status === 200) {
                            // Set short timeout to allow the animation to not look janky
                            await sleep(500);
                            tlOut.play(0);
                        }
                    } else {
                        for(let [key, value] of Object.entries(errors)){
                            setErrorFor(document.getElementById(key), value);
                        }
                    }

                } else if(heroForm) {
                    const contactEmailField = this._IndexView._Contact._element.querySelector('.email--contact');
                    const heroEmailField = this._IndexView._Hero._element.querySelector('.email--hero');
                    const { email } = Object.fromEntries(formData);
                    // If there's a value, set the contact form field and scroll to it
                    if(email) { 
                        heroEmailField.value = '';
                        contactEmailField.value = email;
                       
                        this._IndexView._Hero._emailLink.click();
                    }
                }
            } catch(err) {
                console.log(err);
            }
        });

        this._IndexView._Contact.addFocusOutHandler((e) => {
            e.preventDefault();

            const fieldToValidate = e.target.closest('input') || e.target.closest('textarea');

            if(fieldToValidate) {
                const error = validateContactProperty({ 
                    name: fieldToValidate.name,
                    value: fieldToValidate.value
                });
                if(error) {
                    setErrorFor(fieldToValidate, error);
                } else {
                    setSuccessFor(fieldToValidate);
                }
            };         
        });

        this._IndexView._Contact.addFocusHandler((e) => {
            e.preventDefault();
            const field = e.target.closest('input') || e.target.closest('textarea');
            if(field) {
                setDefaultFor(field);
            }
        });

        // this._IndexView.addLoginHandler(async e => {
        //     const background = e.target.closest('.login__bg');
        //     const content = e.target.closest('.login__content');
        //     const submit = e.target.closest('.login__submit');

        //     if(background && !content) {
        //         background.parentElement.removeChild(background);
        //     }
        
        //     if(submit) {
        //         e.preventDefault();
        //         const credentials = this._IndexView.Login.getFormData();

        //         try {
        //             const {status} = await login(credentials);

        //             if(status === 200) {
        //                 this._IndexView.Login._redirect();
        //             }
        //         } catch(err) {
        //             // Req made, response outside of 2xx range
        //             if(err.response) {
        //                 console.log('Error: Invalid request');
        //             } else if(err.request) {
        //                 console.log('Error: No Response Received')
        //             } else {
        //                 console.log('Error: Setting up Request');
        //             }
        //         }
        //     }
        // });

 

        // Change this to a submit listener on the index view
    }
}

new IndexController();

