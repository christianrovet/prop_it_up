import React, { Component } from 'react';

class Personcard extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.last_name}, {this.props.first_name}</h2>
                <p>Age : {this.props.age}</p>
                <p>Hair Color : {this.props.hair_color}</p>
            </div>
        );
    }
}

export default Personcard;