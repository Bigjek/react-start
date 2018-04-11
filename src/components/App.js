import React from 'react';
import ArticleList from './ArticleList';
import articles from '../fixture'
function App (){
	return (
      <div>
    	<h1> Мой проект </h1>
      	<ArticleList articles={articles} />
      </div>
    )
}
export default App