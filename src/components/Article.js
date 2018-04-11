import React, {Component} from 'react';

class Article extends Component {
    //начальное состояние
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         isOpen: true
    //     }
        
    //     this.closeClick = closeClick.bind(this)
    // }
    state = {
        isOpen: true
    }

    render(){
    const {article} = this.props
    //Добавление условий для отображения
    const body = this.state.isOpen && <section>{article.text}</section>;	
    return (
    	<div className="hello"> 
            <h2>
                {article.title}
                <button onClick={this.closeClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
            </h2>
            {body}
            <h3>date creation: {(new Date(article.date)).toDateString()}</h3>
      	</div>
    )}
    closeClick = () => {
       console.log('close'); 
       this.setState({
           isOpen: !this.state.isOpen
       })
    }
}
export default Article