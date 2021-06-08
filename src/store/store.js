// import de LIBS
import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

//import de reducers
import controleLoginCad from './reducers/cadlogin'
import user from './reducers/user'
import friendlist from './reducers/friendlist'
import posts from './reducers/posts'
import controllerMenu from './reducers/controller-menu'
import friend from './reducers/friend'
import notifications from './reducers/notifications'

const store = createStore(combineReducers({
    controleLoginCad,
    user,
    friendlist,
    posts,
    controllerMenu,
    friend,
    notifications
}), composeWithDevTools())

export default store