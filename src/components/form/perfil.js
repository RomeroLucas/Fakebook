//import de LIBS
import axios from 'axios'
import {useSelector, } from 'react-redux'
import {useState} from 'react'

// import de ICONS
import EditIcon from '@material-ui/icons/Edit'
import PersonAddIcon from '@material-ui/icons/PersonAdd'

import './form.css'

export default function PerfilForm(props) {
    let userReducer = useSelector(state => state.user)
    let friendReducer = useSelector(state => state.friend)


    // controle de formulario
    let [status, setStatus] = useState({
        status: 'disabled',
        btn: false
    })
    
    //função para eventos de click
    let handleclick = (type) => {
        //evento para iniciar a  edição de formulario
        if(type = 'EDITAR') {
            setStatus({
                status: false,
                btn: <button className='btn btn-success'>Confirmar</button>
            })
        }
    }

    return (
        <form className='container-perfil-form'>
        <div>
            <h1>Dados do usuário {props.dados.username}</h1>
            {/* props responsavel por renderizar o btn de adicionar amigos na VIEW friends */}
            
            <span onClick={()=> handleclick('EDITAR')}>Editar <EditIcon /></span>
        </div>

        <div className='mb-3'>
            <label htmlfor=''>Seu nome de usuário</label>
            <input type='text' className='form-control' id='' placeholder={props.dados.username} disabled={status.status} />
        </div>

        <div className='mb-3'>
            <label htmlfor=''>Seu endereço de e-mail</label>
            <input type='email' className='form-control' id='' placeholder={props.dados.email} disabled={status.status} />
        </div>

        <div className='mb-3'>
            <label htmlfor=''>Sua senha</label>
            <input type='password' className='form-control' id='' value={props.dados.senha} disabled={status.status} />
        </div>

        <div className='mb-3'>
            {status.btn}
        </div>

        </form>
    )
}