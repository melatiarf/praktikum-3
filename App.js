import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pegawai from './Pegawai';

function App() {
  return (
    <Router>
      <Link to="/pegawai" className="nav-link">Daftar Pegawai</Link>
      <Switch>
      <Route path="/pegawai" component={Pegawai} />
      </Switch>
    </Router>
  );
}

export default App;
