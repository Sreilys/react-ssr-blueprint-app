import React, { Component } from "react";
import timeAgo from "node-time-ago";
import orderBy from "lodash.orderBy";
import "./ArticleList.css";

class ArticleList extends Component {
  state = {
    sortOrder: "upvotes"
  };

  setOrder(order, event) {
    event.preventDefault();
    this.setState({ sortOrder: order });
  }

  render() {
    const articles = orderBy(this.props.articles, this.state.sortOrder, "desc");

    return (
      <div className="articleslist">
        <div className="header">
          <div className="header-title">
            <strong>Articles</strong>
          </div>
          <div className="sort">
            Sort By:{" "}
            <a
              href="#"
              className={this.state.sortOrder === "upvotes" && "sort-selected"}
              onClick={this.setOrder.bind(this, "upvotes")}>
              Upvotes
            </a>|
            <a
              href="#"
              className={this.state.sortOrder === "date" && "sort-selected"}
              onClick={this.setOrder.bind(this, "date")}>
              Date
            </a>
          </div>
        </div>

        {articles &&
          articles.map(post =>
            <div key={post.id} className="articles-item">
              <p>
                <span className="articles-position">{post.id}. ▲</span> {post.title}{" "}
                <small>(by {post.author})</small>
              </p>
              <small className="articles-details">
                {post.upvotes} upvotes | {timeAgo(post.date)}
              </small>
            </div>
          )}
      </div>
    );
  }
}

export default ArticleList;
