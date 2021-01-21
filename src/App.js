import { Suspense, lazy } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

const Details = lazy(() => import('./components/Details'));

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/details' exact>
          <Suspense fallback='<div className="w3-container w3-blue">Loading...</div>'>
            <Details />
          </Suspense>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
