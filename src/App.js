import { Route, Switch } from "react-router";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Movielist from "./pages/movielist";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/movieList" component={Movielist} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
