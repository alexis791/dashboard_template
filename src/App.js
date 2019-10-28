import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom' 

/**Compnents */
import Header from './containers/Header'
import Menu from './containers/Menu'
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
                <div className="content">
                    <Route path="/planteles" component={Planteles} />
                    <Route path="/edificios" component={Edificios} />
                    <Route path="/aulas" component={Aulas} />
                    <Route path="/" exact component={Home} />
                </div>
            </BrowserRouter>
        </>
    )
}

export default App