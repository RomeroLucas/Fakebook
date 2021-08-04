//import de LIBS
import {Switch, Route, useHistory, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

//import de COMPONENTES
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import AsideMenu from './components/aside-menu'

//import de VIEWS
import Homepage from './views/homepage'
import Feed from './views/feed'
import Perfil from './views/perfil'
import FriendPerfil from './views/friend'

//render de toda a aplicação
function App() {
  const userReducer = useSelector(state => state.user)

  // roload router-dom error

  // Redirect caso o usuario esteja logado via cache
  const history = useHistory()
  useEffect(()=> {
    if(userReducer) {
      history.push('/feed')
    }  else {
      history.push('/')
    }
  }, [])

  


  return (
    <div className="App">
      <Header>

      </Header>
      <AsideMenu />
      <Main>
        <Switch>
          <Route path='/perfil' component={Perfil} />
          <Route path={`/feed`} component={Feed} />
          <Route path={`/friend`} component={FriendPerfil} />
          <Route path='/' component={Homepage} />
          <Route path='*'>
            <p>Rota de testes</p>
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App
