import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from 'pages/Home/Home';
import NavBar from 'components/organisms/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
