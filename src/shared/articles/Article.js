import React, { Component } from "react";
import ArticleList from "./ArticleList";
import "isomorphic-fetch";

class Article extends Component {
  constructor(props) {
    super(props);

    let initialData;
    if (__isBrowser__) {
      initialData = window.__initialData__;
      delete window.__initialData__;
    } else {
      initialData = props.staticContext.initialData;
    }

    this.state = { articles: initialData };
  }

  componentDidMount() {
    if (!this.state.articles) {
      Article.requestInitialData().then(data => this.setState({ articles: data }));
    }
  }

  static requestInitialData() {
    return fetch("http://127.0.0.1:3000/api/articles")
    .then(response => response.json())
    .catch(error => console.log(error));
  }

  render() {
    const { articles } = this.state;
    return <ArticleList articles={articles} />;
  }
}

export default Article;
