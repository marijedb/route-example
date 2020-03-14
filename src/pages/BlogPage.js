import React from "react";
import ArticlesList from "../components/ListOfArticles";
import articlesDatabase from "../data/articles_database";

const BlogPage = () => (
  <div>
    <h1>Blog</h1>
    <div>
        {/** Render `ArticlesList` component, while `articles_data` is used as function parameter that have access to `articles_database` */}

        <ArticlesList articles_data={articlesDatabase} />

        {/**
        If we would like to render only specific article from Array of objects we can filter result like this:
        <Art_List articles_data={art_DB.filter(chooseOne => chooseOne === art_DB[0])} />
      */}

        {/** Function (component) `ArticlesList` will `map` over array of `articles_database` objects */}
    </div>
  </div>
);

export default BlogPage;