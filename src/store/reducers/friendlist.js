const INITIAL_STATE = false

export default function friendlist(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CARREGAR_AMIGOS':
            
            return action.payload
    
        default:
            return state
    }
}