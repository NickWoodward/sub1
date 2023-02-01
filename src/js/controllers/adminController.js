import {gsap} from 'gsap';

import AdminView from '../views/pages/AdminView';
import * as AdminModel from '../models/adminModel';

export default class AdminController {
  _AdminView;

  constructor() {
    //STEPS
    // 1: Get the data needed
    this._data = this.init();

    // 2: Instantiate the Views with the data
    this._AdminView = new AdminView(this._data);

    // 3: Render the html elements
    this._AdminView._render();

    gsap.to('body', {autoAlpha:1, duration: 1});

  }

  init() {
    // await AdminModel.getAdminData()

    return {
        companyName: 'Sub1',
        headerData: AdminModel.getHeaderData(),
    }
}
}

new AdminController();