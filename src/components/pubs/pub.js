

import './pubs.css'

export default function Pub(props) {
    return (
        <div className='mb-3 pub-container'>
            <div>
                <span className="friendicon-image pub-image-position">{props.dados.username.substr(0, 1)}</span>
                <label className='form-label'>{props.dados.username}</label>
            </div>
            <div className='form-control' disabled>{props.dados.content}</div>
        </div>
    )
}