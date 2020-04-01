import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <h1>Logo</h1>
        </header>
        <aside>
          <p className="selected">About</p>
          <p>
            <Link to="/articles">Articles</Link>
          </p>
        </aside>
        <article>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt magni sit error doloribus sunt vero vel unde. Necessitatibus alias hic, cum dolorum incidunt obcaecati, distinctio eveniet placeat qui eum nulla.</p>
        </article>
      </div>
    );
  }
}

export default Home;
