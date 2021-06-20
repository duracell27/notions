import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <AlertState>
      <FirebaseState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} exact component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </FirebaseState>
    </AlertState>
  );
}

export default App;
