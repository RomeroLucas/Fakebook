// import de LIBS
import {useEffect, lazy, Suspense} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

// import de COMPONENTS
import FormPerfil from '../../components/form/perfil'
import PubList from '../../components/pubs/publist'

//import de ICONS
import PersonAddIcon from '@material-ui/icons/PersonAdd'

import {url} from '../../scripts'

export default function FriendPerfil() {
    let userReducer = useSelector(state => state.user)
    let friendReducer = useSelector(state => state.friend)
    
    let dispatch = useDispatch()

    let handleclick = (e) => {
        e.preventDefault()
        axios.post(`${url}/add-amigo/id_user=${userReducer.id_user}/id_friend=${friendReducer.id_user}`)
        .then(response => response.data.log.serverStatus === 2 ? alert('Solicitação enviada com sucesso!') : alert('Falha, por favor tente novamente mais tarde.'))
    }


    //reload das PUBLICAÇÕES
    useEffect(()=> {
        axios.get(`${url}/id_user=${friendReducer.id_user}/publicacoes`)
        .then(response => dispatch({type: 'CARREGAR_POSTS', payload: response.data}))
    }, [])

    return (
        <div className='container container-perfil'>
            <FormPerfil dados={friendReducer} />
            <PubList dados={`id_user=${friendReducer.id_user}/publicacoes`} />
        </div>
    )
}