//import de LIBS
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import axios from 'axios'

import './form.css'
import {url} from '../../scripts'

export default function PostForm() {
    let userReducer = useSelector(state => state.user)
    const [post, setpost] = useState(false)
    
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
        axios.post(`${url}/publicar/id_user=${userReducer.id_user}`, post, {headers: headers})
        .then(() => {
            setpost(false)
            axios.get(`${url}/publicacoes`)
            .then(response => dispatch({type: 'CARREGAR_POSTS', payload: response.data}))
        })
    }

    return (
        <div className='container-sm formpost-container'>
            <div className='mb-3'>
            <textarea onChange={handlechange} name='content' id='userpub' className="form-control" rows='3' placeholder={`Diga o que está pensando ${userReducer.username}`}></textarea>
            <button onClick={handlesubmit} className='btn btn-primary form-control' id="btn-postar">POSTAR</button>
            </div>
        </div>
    )
}