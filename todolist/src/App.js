import React from 'react';
import Homepage from './components/HomePage';
import Login from './components/login';
import Register from './components/register'
import {BrowserRouter as Router,Route } from 'react-router-dom';


const App=()=> {
  

  return (
  <>
{/* <Login/> */}
<Router>
     <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/home" component={Homepage} />
    </Router>

  </>
  );
}

export default App;
