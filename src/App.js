import React, {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import NotFound from './components/404NotFound/index';

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <ul>
            <li><Link to="/photos">Go to photos page</Link></li>
            <li><Link to="/photos/add">Add new photo</Link></li>
            <li><Link to="/photos/123">Edit photo</Link></li>
          </ul>

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
