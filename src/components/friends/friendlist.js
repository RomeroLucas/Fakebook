//import de LIBS
import {useEffect, lazy, Suspense} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


import loading from '../../img/loading.png'
import './friends.css'
import {url} from '../../scripts'

//import LAZY LOADINGO (obrigatorio ser o ultimo import senão quebra a aplicação)
const FriendIcon = lazy(() => import('./friendicon'))

export default function FriendList(props) {
    let listaAmigos = useSelector(state => state.friendlist)
    let dispatch = useDispatch()

    // função responsável por carregar a lista de amigos
    useEffect(()=> {
        axios.get(`${url}/amigos`)
        .then(response => dispatch({type: 'CARREGAR_AMIGOS', payload: response.data}))
    }, [])

    //função que envia o amigo selecionado para o reducer, exibe na view FRIEND
    let history = useHistory()
    let handleclick = (dados) => {
        let amigo = dados
        dispatch({type: "AMIGO_SELECIONADO", payload: amigo})
        history.push('/friend')
    }


    //função responsável por exibir a lista de amigos na tela
   let amigos = false
   if (listaAmigos.length > 0) {
    amigos = listaAmigos.map(item => 
        <Suspense fallback={<img src={loading} alt="Carregando" />}>
            <span onClick={() => handleclick(item)} ><FriendIcon key={item.username} dataAmigos={item} estilo='friendicon-container' /></span>
        </Suspense>    
    )
        
   } else {
    amigos = <p>Você ainda não possui amigos</p>
   }

    return (
        <div className={`container-fluid friendlist-container`}>
            {amigos}
        </div>
    )
}