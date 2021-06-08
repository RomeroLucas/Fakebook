//import de LIBS
import {Switch, Route} from 'react-router-dom'

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
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App
