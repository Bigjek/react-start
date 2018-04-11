import React from 'react';
function Article (props){
    const {article} = props
    const body = <section>{article.text}</section>;	
    console.log('props', props);
    return (
    	<div className="hello"> 
            <h2>
                {article.title}
                <button onClick={closeClick}>close</button>
            </h2>
            {body}
            <h3>date creation: {(new Date(article.date)).toDateString()}</h3>
      	</div>
    )
}
function closeClick(){
    console.log('close');
}
export default Article