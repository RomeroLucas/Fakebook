const INITIAL_STATE = {
    contador: [],
    listaNotificacoes: false
}

export default function notifications(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CARREGAR_NOTIFICACOES':
            
            return action.payload
    
        default:
            return state
    }
}