//import de LIBS
import {useState, useEffect, lazy, Suspense} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


import loading from '../../img/loading.png'
import './friends.css'
import {url} from '../../scripts'

//import LAZY LOADINGO (obrigatorio ser o ultimo import senão quebra a aplicação)
const FriendIcon = lazy(() => import('./friendicon'))

export default function FriendlistBusca(props) {
    let [listaBuscada, setListaBuscada] = useState(false)
    let dispatch = useDispatch()

    // função responsável por carregar a lista de perfis buscados
    useEffect(()=> {
        axios.get(`${url}/busca/${props.busca}`)
        .then(response => setListaBuscada(response.data))
    }, [])

    //função que envia o perfil selecionado para o reducer, exibe na view FRIEND
    let history = useHistory()
    let handleclick = (dados) => {
        let amigo = dados
        dispatch({type: "AMIGO_SELECIONADO", payload: amigo})
        dispatch({type: "CLOSE-ASIDE"})
        history.push('/friend')
    }

     //função responsável por exibir a lista de amigos na tela
   let perfis = false
   if (listaBuscada.length > 0) {
    perfis = listaBuscada.map(item => 
        <Suspense fallback={<img src={loading} alt="Carregando" />}>
            <span onClick={() => handleclick(item)} ><FriendIcon key={item.username} dataAmigos={item} estilo='friendicon-container-busca' /></span>
        </Suspense>    
    )
        
   } else {
    perfis = false
   }

    return (
        <div className={`container-fluid friendlist-container-busca`}>
            {perfis}
        </div>
    )
}