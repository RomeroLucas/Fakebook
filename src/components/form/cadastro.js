//import de LIBS
import {useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

//import de ICONS
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'

import './form.css'
import {url} from '../../scripts'

export default function FormCad() {
    let dispatch = useDispatch()

    let fechar = () => {
        dispatch({type: "FECHAR_FORM"})
    }

    //função responsavel por gerar o objeto de cadastro
    const [newuser, setNewuser] = useState(false)
    let handlechange = ({target}) => {
        let {id, value} = target
        setNewuser({...newuser, [id]: value})
        console.log(newuser)
    }
    useEffect(()=> {
        console.log(newuser)
    }, [newuser])

    //função responsavel por realizar o cadastro no banco de dados
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    let history = useHistory()
    let handlesubmit = (e) => {
        e.preventDefault()
        axios.post(`${url}/cadastro/usuario`, newuser, {headers: headers})
        .then(() => {
            alert("Usuario cadastrado com sucesso!")
            dispatch({type: "FECHAR_FORM"})
        })
    }

    return (
        <form className='container-form-homepage'>
            <span onClick={fechar}>VOLTAR <KeyboardReturnIcon /></span>
            <div className="mb-3">
                <label htmlFor="username-c" className="form-label">Usuario</label>
                <input onChange={handlechange} type="text" className="form-control"  id='username' required />
                <div id="emailHelp" className="form-text">Nome de usuário que será exibido na plataforma</div>
            </div>

            <div className="mb-3">
                <label htmlFor="email-c" className="form-label">Email</label>
                <input onChange={handlechange} type="email" className="form-control" id='email' required />
                <div id="emailHelp" className="form-text">Cadastre um e-mail ficticio para usar!</div>
            </div>

            <div className="mb-3">
                <label htmlFor="senha-c" className="form-label">Senha</label>
                <input onChange={handlechange} type="password" className="form-control" id='senha' required />
                <div id="emailHelp" className="form-text">Ao cadastrar não coloque sua senha verdadeira!</div>
            </div>

            {/* <div className="mb-3">
                <label htmlFor="resenha-c" className="form-label">Repita sua senha</label>
                <input onChange={handlechange} type="password" className="form-control" id='resenha-c' required />
                <div id="emailHelp" className="form-text">Repita sua senha para não ocorrer erros</div>
            </div> */}

            <div className='mb-3'>
                <button onClick={handlesubmit} className="btn btn-success">Cadastrar-se</button>
            </div>
        </form>
    )
}