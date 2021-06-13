//import de LIBS
import {useSelector, useDispatch} from 'react-redux'
import {useHistory, Link} from 'react-router-dom'

//import de COMPONENTS
import FormBusca from '../form/busca'

//import de ICONS
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'

import './aside-menu.css'

export default function AsideMenu() {
    let dispatch = useDispatch()
    let history = useHistory()

    const menuAside = useSelector(state => state.controllers.menuAside)
    
    let handleclick = (actionType) => {
        dispatch({type: actionType})
        if(actionType === 'LOGOUT') {
            dispatch({type: 'CLOSE-ASIDE'})
            history.push('/')
        }
    }
    
    return (
        <div className={`menu-big-container ${menuAside}`}>
            <aside onClick={()=> handleclick('CLOSE-ASIDE')}></aside>
            <aside className={`aside-menu`}>
                <FormBusca />

                <Link to='/feed'><p onClick={()=> dispatch({type: 'CLOSE-ASIDE'})}><HomeIcon /> PÁGINA INICIAL</p></Link>
                <Link to='/perfil'><p onClick={()=> dispatch({type: 'CLOSE-ASIDE'})}><AccountCircleIcon/> MEU PERFIL</p></Link>
                <p onClick={()=> handleclick('LOGOUT')}><ExitToAppIcon /> SAIR</p>
            </aside>
        </div>
    )
}