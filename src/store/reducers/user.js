const INITIAL_STATE = JSON.parse(localStorage.getItem('user'))

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "VALIDAR":
            
            return action.payload

        case "CARREGAR_USUARIO":

            return {...state}

        case 'LOGOUT': 

            return state = INITIAL_STATE
    
        default:
            return state
    }
}