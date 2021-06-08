//import de LIBS
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

//import de ICONS
import NotificationsIcon from '@material-ui/icons/Notifications'

import './header.css'
import {url} from '../../scripts'

export default function Notification() {
    let userReducer = useSelector(state => state.user)
    let notificacoes = useSelector(state => state.notifications)
    let dispatch = useDispatch()



    return (
        <span className='container-notification'><NotificationsIcon /> <p>0</p></span>
    )
}