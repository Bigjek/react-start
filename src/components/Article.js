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
    const body = this.state.isOpen && <section className='cart-text'>{article.text}</section>;	
    return (
    	<div className="card mx-auto" style = {{width:'50%'}}>
            <div className='card-header'>
                <h2>
                    {article.title}
                    <button onClick={this.closeClick} className='btn btn-primary btn-lg float-right'>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
            </div>
            <div className='card-body'>
                <h6 className='card-subtitle text-muted'>date creation: {(new Date(article.date)).toDateString()}</h6>
                {body}
            </div>
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