import React from 'react'
import MenuBar from './menu/MenuBar'
import Table from './tableItemsComponent/TablaItems'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Prueba from './Prueba'
import {Provider} from 'react-redux';
import { store } from '../store/store'
import { Formulario } from './tableItemsComponent/modalForm/Formulario'
const App = () => {
    return (
          <Provider store = {store}>
            <MenuBar/>
            <BrowserRouter>
          <Switch>
            <Route path="/items">
              <Table />
            </Route>
            <Route path="/formulario">
              <Formulario/>
            </Route>
          </Switch>
        </BrowserRouter>
        </Provider>
        
    )
}


export default App
