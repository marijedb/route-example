import React from "react";
import Art_List from "../components/ListOfArticles";
import art_DB from "../data/articles_database";

const BlogPage = () => (
  <React.Fragment>
    <h1>Blog</h1>
    {/** Render `ArticlesList` component, while `articles_data` is used as function parameter that have access to `articles_database` */}

    <Art_List articles_data={art_DB} />

    {/**
    If we would like to render only specific article from Array of objects we can filter result like this:
    <Art_List articles_data={art_DB.filter(chooseOne => chooseOne === art_DB[0])} />
  */}

    {/** Function (component) `ArticlesList` will `map` over array of `articles_database` objects */}
  </React.Fragment>
);

export default BlogPage;