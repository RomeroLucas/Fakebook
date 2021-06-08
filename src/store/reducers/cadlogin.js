const INITIAL_STATE = {
    data: false
}

export default function controleLoginCad(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ABRIR_FORM':
            
            return {data: action.payload}

        case 'FECHAR_FORM':
            return {data: false}

        default: 
            return state
    }
}