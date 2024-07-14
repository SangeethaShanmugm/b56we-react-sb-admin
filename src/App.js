import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Switch>
                <Route exact={true} path="/" component={Dashboard} />
                <Route exact={true} path="/tables" component={Table} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
