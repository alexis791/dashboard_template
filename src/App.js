import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom' 

/**Compnents */
import Header from './containers/Header'
import Menu from './containers/Menu'
import Content from './containers/Content'
import Planteles from './components/planeacion_educativa/Planteles'
import Edificios from './components/planeacion_educativa/Edificios'
import Aulas from './components/planeacion_educativa/Aulas'
import Home from './components/Home'

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <Menu />
                <Content>
                    <Route path="/planteles" component={Planteles} />
                    <Route path="/edificios" component={Edificios} />
                    <Route path="/aulas" component={Aulas} />
                    <Route path="/" exact component={Home} />
                </Content>
            </BrowserRouter>
        </>
    )
}

export default App