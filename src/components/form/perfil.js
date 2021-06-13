//import de LIBS
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useState} from 'react'

// import de ICONS
import EditIcon from '@material-ui/icons/Edit'

import './form.css'
import {url} from '../../scripts'

export default function PerfilForm(props) {
    let userReducer = useSelector(state => state.user)

    //headers para o axios
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }

    // controle de formulario
    let [status, setStatus] = useState({
        status: 'disabled',
        btn: false
    })

    //captura de dados do formulario
    let [perfil, setPerfil] = useState({
        username: userReducer.username,
        email: userReducer.email,
        senha: userReducer.senha
    })

    let handlechange = ({target}) => {
        let {name, value} = target
        setPerfil({...perfil, [name]: value})
    }
    
    //função para eventos de click
    let handleclick = (type) => {
        //evento para iniciar a  edição de formulario
        if(type === 'EDITAR') {
            if(status.status === false) {
                setStatus({status: 'disabled', btn: false})
            } else {
                setStatus({
                    status: false,
                    btn: true
                })
            }
        }
        //evento para enviar dados editados para o banco de dados
        if(type === 'CONFIRMAR') {
            axios.post(`${url}/editar/userid=${userReducer.id_user}`, perfil, {headers: headers})
            .then(response => setStatus({status: 'disabled', btn: false}), alert('Dados alterados com sucesso!'))
        }
    }

    return (
        <form className='container-perfil-form'>
        <div>
            <h1>Dados do usuário {props.dados.username}</h1>
            {/* props responsavel por renderizar o btn de adicionar amigos na VIEW friends */}
            
            {userReducer.id_user === props.dados.id_user ? <span onClick={()=> handleclick('EDITAR')}>Editar <EditIcon /></span> : null}
        </div>

        <div className='mb-3'>
            <label htmlFor='form-perfil-username'>Seu nome de usuário</label>
            <input onChange={handlechange} name='username' type='text' className='form-control' id='form-perfil-username' placeholder={props.dados.username} disabled={status.status} />
        </div>

        <div className='mb-3'>
            <label htmlfor='form-perfil-email'>Seu endereço de e-mail</label>
            <input onChange={handlechange} name='email' type='email' className='form-control' id='form-perfil-email' placeholder={props.dados.email} disabled={status.status} />
        </div>

        {userReducer.id_user === props.dados.id_user ? <div className='mb-3'>
            <label htmlfor='form-perfil-password'>Sua senha</label>
            <input onChange={handlechange} name='senha' type='password' className='form-control' id='form-perfil-password' value={perfil.senha} disabled={status.status} />
        </div> : null}

        <div className='mb-3'>
            {status.btn ? <button onClick={()=> handleclick('CONFIRMAR')} type='button' className='btn btn-success'>CONFIRMAR</button> : null}
        </div>

        </form>
    )
}