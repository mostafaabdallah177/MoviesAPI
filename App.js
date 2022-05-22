import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./Movies/movie";
import Login from "./Login/login";
import NavBarComponent from "./NavBarComp/navBarCom";
import Favorites from "./Favorites/favorit";
import Rejester from "./Rejester/rejest";
import DetialsMovies from "./MovieDeitals/moviesDetials";
import { useState } from "react";
import { LanguageProvider } from "./Contacxt/Language";
import LangeChangePage from "./Contacxt/Change/langChangePage";
import { useSelector } from "react-redux";

function App() {
  let lang = useSelector((state) => state.Language.Language);

  const [Language, setLang] = useState("en");
  return (
    <div className="App">
      {/* <h1>Movies</h1> */}
      <Router>
        <LanguageProvider value={{ Language, setLang }}>
          <NavBarComponent />
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/Login" exact component={Login} />
            <Route path="/DetialsMovies/:id" exact component={DetialsMovies} />
            <Route path="/Favorites" exact component={Favorites} />
            <Route path="/Rejester" exact component={Rejester} />
            <Route path="/LangeChangePage" exact component={LangeChangePage} />
          </Switch>
        </LanguageProvider>
      </Router>
    </div>
  );
}
export default App;
