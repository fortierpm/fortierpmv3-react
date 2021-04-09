import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORT STYLES
import './App.css';

// IMPORT PAGES
import Home from "./page/Home";
import Photos from "./page/Photos";
import Graphics from "./page/WebProjects";
import WebProjects from "./page/WebProjects";
import PageNotFound from "./page/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/photos" exact component={Photos} />
          <Route path="/graphics" exact component={Graphics} />
          <Route path="/web-projects" exact component={WebProjects} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
