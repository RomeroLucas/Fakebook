const INITIAL_STATE = false

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