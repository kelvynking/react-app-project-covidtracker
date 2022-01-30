import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import EnterStats from './components/EnterStats';
import ViewStats from './components/ViewStats';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Navigation />
          <Route exact path="/" component={Home} /> 
          <Route exact path="/enterstats" component={EnterStats} />
          <Route exact path="/viewstats" component={ViewStats} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
