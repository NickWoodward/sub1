import { createDeepCopy } from "../utils/helper";

const state = {
    dashboardData: {
        companyName: 'sub1',
        items: [
            {name: '1'},{name: '2'},{name: '3'}
        ]
    },
    headerData: {
        page: 'About',
        navItems: ['About', 'Why Us', 'Contact']
    }

}

// Example Getters and Setters
export const setCompanyName = (name) =>{
    state.dashboardData.companyName = name;
}
export const getCompanyName = () => {
    return state.dashboardData.companyName;
}
export const getDashboardData = () => {
    return createDeepCopy(state.dashboardData);
}
export const getHeaderData = () => {
    return createDeepCopy(state.headerData);
}



//// END examples ////

