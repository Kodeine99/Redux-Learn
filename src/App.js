import React, {Suspense} from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import  Header from './components/Header/index';
import NotFound from './components/404NotFound/index';

function App() {

  const Photo = React.lazy(() => import('./features/Photo'));
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          
          <Header/>
            <Switch>
              <Redirect exact from="/photos" to="/photos">
                <Route path="/photos" component={Photo} />
                <Route component={NotFound} />
              </Redirect>
            </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
