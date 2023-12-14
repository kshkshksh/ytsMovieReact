import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routers/About";
import Detail from "./routers/Detail";
import Detail2 from "./routers/Detail2";
import Home from './routers/Home';
import Index from "./routers/Index";

function App() {
  return (
    <BrowserRouter basename="{process.env.PUBLIC_URL}">
      <Navigation />
      <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/index"} component={Index} />
        <Route path={"/list"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/detail"} component={Detail} />
        <Route path={"/detail2"} component={Detail2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
