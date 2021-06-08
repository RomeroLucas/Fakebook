//import de LIBS
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

import './main.css'

export default function Main(props) {
    //função para deslogar o usuario caso o reducer esteja vazio
    let userReducer = useSelector(state => state.user)
    let history = useHistory()
    if(userReducer === false) {
        history.push('/')
    }

    return (
        <main className='container-sm main-container'>
            {props.children}
        </main>
    )
}