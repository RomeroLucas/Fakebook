//import de LIBS
import {useEffect, lazy, Suspense} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

//import de COMPNENTS
// import Pub from './pub'

import loading from '../../img/loading.png'
import './pubs.css'
import {url} from '../../scripts'

//import Lazy Loading
const Pub  = lazy(()=> import('./pub'))


export default function PubList() {
    const posts = useSelector(state => state.posts)
    let dispatch = useDispatch()

    //função para carregar os posts do banco de dados e jogar no reducer
    useEffect(()=> {
        axios.get(`${url}/publicacoes`)
        .then(response => dispatch({type: 'CARREGAR_POSTS', payload: response.data}))
    }, [])

    //função para exibir os posts salvos no reducer
    let exibir = false
    if(posts.length > 0) {
        exibir = posts.slice().reverse().map(item => 
            <Suspense fallback={<img src={loading} alt='Carregando' />}>
                <Pub dados={item} key={item.username} />
            </Suspense>
        )
    } else {
        exibir = <p>Nada a exibir</p>
    }

    return  (
        <div className='.container-sm publist-container'>
            {exibir}
        </div>
    )
}