import React, {useState} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom' 

/**Compnents */
import Header from './containers/Header'
import Menu from './containers/Menu'
import Content from './containers/Content'
import Planteles from './components/planeacion_educativa/Planteles'
import Edificios from './components/planeacion_educativa/Edificios'
import Aulas from './components/planeacion_educativa/Aulas'
import Home from './components/Home'
import AulaNueva from './components/planeacion_educativa/AulaNueva'
import { CSSTransition } from 'react-transition-group'

const App = () => {
    const [menu, setMenu] = useState(true)

    const handlerMenu = (e) => {
        console.log(menu)
        setMenu( !menu )
    }

    return(
        <CSSTransition in={menu} timeout={2000} classNames="wrapper">
            <div class="wrapper">  
                <BrowserRouter>
                    <Header menuButton={handlerMenu} stateMenu={menu}/>
                    <Menu stateMenu={menu}/>
                    <Content>
                        <Switch>
                            <Route path="/planteles" component={Planteles} />
                            <Route path="/edificios" component={Edificios} />
                            <Route exact path="/aulas" component={Aulas} />
                            <Route path="/aulas/crear" component={AulaNueva} />
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </Content>
                </BrowserRouter>
            </div>
        </CSSTransition>
    )
}

export default App