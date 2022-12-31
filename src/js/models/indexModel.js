import { createDeepCopy } from "../utils/helper";

const state = {
    dashboardData: {
        companyName: 'JRS Co',
        items: [
            {name: '1'},{name: '2'},{name: '3'}
        ]
    },
    headerData: {
        titles: ['About', 'Home', 'Login']
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

export const indexModelFunction = () => {
    console.log('indexModel');
}