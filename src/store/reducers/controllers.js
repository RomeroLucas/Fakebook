const INITIAL_STATE = {
    menuIcon: false,
    menuAside: 'hidden-aside',
    notificationCounter: 0,
    notificationList: [],
    notificationContainer: 'hidden-notification-container' 
}

export default function controllers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "OPEN-ASIDE":
            
            return {menuAside: 'show-aside'}

        case "CLOSE-ASIDE":

            return {menuAside: false}

        case 'LOAD_NOTIFICATION':
        
            return {notificationList: action.payload}
        
        case 'LOAD_COUNTER_NOTIFICATION': 

            return {notificationCounter: state.notificationList.lenght}
    
        default:
            return state
    }
}