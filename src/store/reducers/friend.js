const INITIAL_STATE = false

export default function friend(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "AMIGO_SELECIONADO":
            
            return action.payload
    
        default:
            return state
    }
}