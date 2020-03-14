import React from "react";
import { useParams } from "react-router-dom";
import allArticles from "../data/articles_database";
const SingleArticle = () => {

  let { name } = useParams();
  let article = allArticles.find(article => article.name === name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((prg, key) => (
        <p key={key}>{prg}</p>
      ))}
    </>
  );
};

export default SingleArticle;