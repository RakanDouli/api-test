import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Gamelist from "./pages/Gamelist";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/Gamelist" component={Gamelist} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
