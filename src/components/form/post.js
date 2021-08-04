//import de LIBS
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import axios from 'axios'

import './form.css'
import {url} from '../../scripts'

export default function PostForm() {
    let userReducer = useSelector(state => state.user)
    const [post, setpost] = useState({span: 0})
    
    let handlechange = ({target}) => {
        let {name, value} = target
        setpost({...post, [name]: value})
    } 

    //função responsável por publicar no feed
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    let dispatch = useDispatch()
    let handlesubmit = (e) => {  
        e.preventDefault()
        post.content && post.span < 2 ?
        axios.post(`${url}/publicar/id_user=${userReducer.id_user}`, post, {headers: headers})
        .then(() => {
            setpost(false)
            axios.get(`${url}/publicacoes`)
            .then(response => dispatch({type: 'CARREGAR_POSTS', payload: response.data}), setpost({...post, span: post.span + 1}))
        })
        : alert('Por favor escreva alguma coisa!') 
    }

    return (
        <form className='container-sm formpost-container'>
            <div className='mb-3'>
            <textarea onChange={handlechange} name='content' id='userpub' className="form-control" rows='3' placeholder={`Diga o que está pensando ${userReducer.username}`} required={true}></textarea>
            <button onClick={handlesubmit} className='btn btn-primary form-control' id="btn-postar">POSTAR</button>
            </div>
        </form>
    )
}