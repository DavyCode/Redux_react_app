import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
      
        this.state ={term: ''}
        
        this.onInputChange = this.onInputChange.bind(this);
      }
    onInputChange(e){
        this.setState({term :e.target.value});
    }  

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                     className="form-control" 
                     placeholder="Get a five-day weather forcast in your favorite cities"
                     value={this.state.term}
                     onChange={this.onInputChange}
                     />
                    <span className='input-group-btn'>
                    <button type="button" className="btn btn-secondary">Search</button>
                    </span> 
                </ form>
            </div>
        );
    }
}
