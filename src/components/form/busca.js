//import de LIBS
import {useState} from 'react'

//import de COMPENENTES
import FriendListBusca from '../friends/friendlistabusca'

//import de ICONS
import SearchIcon from '@material-ui/icons/Search'

import './form.css'

export default function FormBusca() {
    let [busca, setBusca] = useState({})
    let [view, setView] = useState(false)
    
    let handlechange = ({target}) => {
        let {id, value} = target
        setBusca({...busca, [id]: value})
    }

    let handlesubmit = (palavraChave) => {
        setView(<FriendListBusca busca={palavraChave} />)
    }

    

    return (
        <div className='container-busca'>
            <div className='input-group mb-3'>
                <input onChange={handlechange} className="form-control" type='text' placeholder='Procure usuarios aqui' id='perfilBuscado' />
                <button onClick={()=> handlesubmit(busca.perfilBuscado)} className='btn btn-outline-secondary'><SearchIcon /></button>
            </div>
            {view}
        </div>
    )
}