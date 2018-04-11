import React from 'react';
import Article from './Article';
import articles from '../fixture'
function App (){
	return (
      <div>
    	<h1> Мой проект </h1>
      	<Article article={articles[0]} foo="bar" flag />
      </div>
    )
}
export default App