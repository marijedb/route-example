import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles_data }) => (
  <Fragment>
    {articles_data.map((article, key) => (
      <div key={key} className='p10 bg-gr' >
        <Link to={`article/${article.name}`}>
          <h3 className='p10 bg-gr'>{article.title}</h3>
        </Link>
        <p className='p10 bg-gr'>{article.content[0].substring(0, 150)} ...</p>
      </div>
    ))}
  </Fragment>
);

export default ArticlesList;