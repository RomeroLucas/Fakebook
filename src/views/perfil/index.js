// import de LIBS
import {useEffect, lazy, Suspense} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

// import de COMPONENTS
import FormPerfil from '../../components/form/perfil'
import PubList from '../../components/pubs/publist'

import './perfil.css'
import {url} from '../../scripts'

export default function Perfil() {
    let userReducer = useSelector(state => state.user)
    //função que carrega dados dos usuarios
    let dispatch = useDispatch()
    useEffect(() => {
        axios.get(`${url}/login/email=${userReducer.email}/senha=${userReducer.senha}`)
        .then(response => dispatch({type: 'CARREGAR_USUARIO', payload: response.data[0]}))         
    })

    //reload das PUBLICAÇÕES
    useEffect(()=> {
        axios.get(`${url}/id_user=${userReducer.id_user}/publicacoes`)
        .then(response => dispatch({type: 'CARREGAR_POSTS', payload: response.data}))
    }, [])

    return (
        <div className='container container-perfil'>
            <FormPerfil dados={userReducer} />
            <PubList dados={`id_user=${userReducer.id_user}/publicacoes`} />
        </div>
    )
}