
import './friends.css'

export default function FriendIcon(props) {
    return (
        <div className={props.estilo}>
            <span className="friendicon-image">{props.dataAmigos.username.substr(0, 1)}</span>
            <p className='friendicon-label'>{props.dataAmigos.username}</p>
        </div>
    )
}