//import de LIBS
import {useDispatch, useSelector} from 'react-redux'

//import de ICONS do material ui
import FacebookIcon from '@material-ui/icons/Facebook'
import MenuIcon from '@material-ui/icons/Menu'

//import de COMPONENTS
import Notifications from './notification'

import "./header.css"

export default function Header() {
    let userReducer = useSelector(state => state.user)
    const dispatch = useDispatch()
    let handleclick = () => userReducer ?  dispatch({type: 'OPEN-ASIDE'}) : alert("Efetue o login para usar esse recurso") 


    return (
        <header className='container-fluid header-container'>
            <span><FacebookIcon /></span>
            <div>
                <Notifications />
                <span onClick={handleclick}><MenuIcon /></span>
            </div>
        </header>
    )
}