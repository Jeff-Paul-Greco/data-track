import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    
      <Router>

        <div>

          <Switch>

            {/* <Route exact path="/" component={Home} />
            <Route component={NoMatch} /> */}

          </Switch>

        </div>

      </Router>
    
  );

};

export default App;
