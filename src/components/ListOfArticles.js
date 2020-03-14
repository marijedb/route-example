import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles_data }) => (
  <React.Fragment>
    {articles_data.map((article, key) => (
      <React.Fragment key={key}>
        <Link to={`article/${article.name}`}>
          <h3>{article.title}</h3>
        </Link>
        <p>{article.content[0].substring(0, 150)} ...</p>
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default ArticlesList;