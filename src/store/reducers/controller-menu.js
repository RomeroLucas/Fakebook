const INITIAL_STATE = {
    menuIcon: false,
    menuAside: 'hidden-aside'
}

export default function controllerMenu(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "OPEN-ASIDE":
            
            return {menuAside: 'show-aside'}

        case "CLOSE-ASIDE":

            return {menuAside: false}
    
        default:
            return state
    }
}