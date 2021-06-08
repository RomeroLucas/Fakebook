const INITIAL_STATE = false 

export default function posts(state= INITIAL_STATE, action) {
    switch (action.type) {
        case 'CARREGAR_POSTS':
            
            return action.payload
        
        case 'NOVA_PUBLICACAO':
            
            return [...state, action.payload]

        default:
            return state
    }
}