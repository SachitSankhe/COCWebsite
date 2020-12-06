import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// Components begin here
import Header from "./components/Header";
import Home from "./components/Home/home";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Glimpse from "./components/glimpses/Glimpse";
import Event from "./components/events/Event";

import Blogs from "./components/blogs/Blog";
import AddBlog from "./components/blogs/AddBlog";
import IndividualBlog from "./components/blogs/IndividualBlog";

import Signin from "./components/auth/Signin.jsx";
import Signup from "./components/auth/Signup.jsx";
import NewHome from "./components/Home/Newhome";
import AddEvent from "./components/events/AddEvent";

function App() {
  const store = configureStore();
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/blogs" render={() => <Blogs />} />
            <Route path="/signin" component={Signin} />
            <Route exact path="/addblog" component={AddBlog} />
            <Route path="/blogs/:id" component={IndividualBlog} />
            <Route path="/blog/edit/:id" component={AddBlog} />
            <Route path="/signup" component={Signup} />
            <Route path="/glimpse" component={Glimpse} />
            <Route path="/newHome" component={NewHome} />
            <Route path="/events" component={Event} />
            <Route path="/addevent" component={AddEvent} />
            {/* <Footer /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
