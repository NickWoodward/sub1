import * as IndexModel from '../models/indexModel';
import IndexView from '../views/pages/IndexView';

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
            if(burger)
                this._IndexView._Header.toggleMenu();
        });
    }
}

const app = new IndexController();

