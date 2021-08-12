import React, {Component} from 'react';
import './card.css'

class Card extends Component {
    posts = this.props.movie
    render() {
        return (
            <div>
                <div className="card">
                    <p><input className="card-input" type="text" onChange={(e) => this.props.set({cardInputValue: e.target.value})}  value={this.props.movie}/> <span>#1</span></p>
                </div>
                <p className="remove">&#10006;</p>
            </div>
        );
    }
}

export default Card;