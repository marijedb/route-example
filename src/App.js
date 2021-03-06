import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import SingleArticle from "./pages/SingleArticlePage";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <div className="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/article/:name" component={SingleArticle} />
        </div>
      </div>
    </Router>
  );
}

export default App;