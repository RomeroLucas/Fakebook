// import de LIBS
import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

//import de reducers
import controleLoginCad from './reducers/cadlogin'
import user from './reducers/user'
import friendlist from './reducers/friendlist'
import posts from './reducers/posts'
import controllers from './reducers/controllers'
import friend from './reducers/friend'

const store = createStore(combineReducers({
    controleLoginCad,
    user,
    friendlist,
    posts,
    controllers,
    friend
}), composeWithDevTools())

export default store