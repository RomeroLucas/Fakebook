//import de LIBS
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

//import de ICONS
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'

import './form.css'
import {url} from '../../scripts'

export default function FormLogin() {
    let userReducer = useSelector(state => state.user)
    let dispatch = useDispatch()
    let history = useHistory()

    let fechar = () => {
        dispatch({type: "FECHAR_FORM"})
    }

    //função responsavel por gerar o objeto de validação de login
    let [dadosLogin, setdadosLogin] = useState({})
    
    let handlechange = ({target}) => {
        const {name, value} = target
        setdadosLogin({...dadosLogin, [name]: value})
    }

    
    let handlesubmit = (e) => {
        e.preventDefault()
        axios.get(`${url}/login/email=${dadosLogin.email}/senha=${dadosLogin.senha}`)
        .then(response => dispatch({type: "VALIDAR", payload: response.data[0]}), dispatch({type: 'FECHAR_FORM'}))
        .then(history.push(`/feed`)) 
    }


    return (
        <form className='container-form-homepage'>
            <span onClick={fechar}>VOLTAR <KeyboardReturnIcon /></span>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={handlechange} type="email" className="form-control" name="email" required />
                <div id="emailHelp" className="form-text">Cadastre um e-mail ficticio para usar!</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Senha</label>
                <input onChange={handlechange} type="password" className="form-control" name='senha' required />
                <div id="emailHelp" className="form-text">Ao cadastrar não coloque sua senha verdadeira!</div>
            </div>

            <div className='mb-3'>
                <button onClick={handlesubmit} className="btn btn-success">Entrar</button>
            </div>
        </form>
    )
}