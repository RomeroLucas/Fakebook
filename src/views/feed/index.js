//import de LIBS
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'

//import de COMPONENTES
import FriendList from '../../components/friends/friendlist'
import PostForm from '../../components/form/post'
import PubList from '../../components/pubs/publist'

import './feed.css'
import {url} from '../../scripts'

export default function Feed() {
    let userReducer = useSelector(state => state.user)
    //função que carrega dados dos usuarios
    let dispatch = useDispatch()
    useEffect(() => {
        axios.get(`${url}/login/email=${userReducer.email}/senha=${userReducer.senha}`)
        .then(response => dispatch({type: 'CARREGAR_USUARIO', payload: response.data[0]}))         
    }, [])

    // reload das PUBLICAÇÕES
    useEffect(()=> {
        axios.get(`${url}/publicacoes`)
        .then(response => dispatch({type: 'CARREGAR_POSTS', payload: response.data}))
    }, [])




    return (
        <div className='container feed-container'>
            <FriendList estilo='friendlist-container' />
            <div className='desk-view-pubs'>
                <PostForm />
                <PubList dados={`${url}/publicacoes`} />
            </div>
        </div>
    )
}