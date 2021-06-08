//import de LIBS
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

//import de COMPONENTS
import FormLogin from '../../components/form/login'
import FormCad from '../../components/form/cadastro'

import './homepage.css'

export default function Homepage(props) {
    let dispatch = useDispatch()
    //select do reducer
    const statereducer = useSelector(state => state.controleLoginCad.data)
    //função de render do formulario
    const [form, setForm] = useState(false)
    useEffect(()=> {
        setForm(statereducer)
    }, [statereducer])

    const handleClick = ({target}) => {
        let alvo = target.textContent
        if(alvo === "LOGIN") {
            dispatch({type: "ABRIR_FORM", payload: <FormLogin />})
        } else {
            dispatch({type: 'ABRIR_FORM', payload: <FormCad />})
        }
    }

    return (
        <div className="homepage-container">
            <p>Seja bem vindo ao <span className="badge bg-primary">FakeBook</span> </p>
            <p>Entre já ou faça seu cadastro</p>

            <section>
                <button onClick={handleClick} className="btn btn-primary">LOGIN</button>
                <button onClick={handleClick} className="btn btn-secondary">Cadastro</button>
                {form}
            </section>
        </div>
    )
}