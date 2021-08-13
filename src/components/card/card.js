import React, {Component} from 'react';
import './card.css'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.movie !== this.props.movie || nextProps.number !== this.props.number || nextProps.movie !== this.props.movie
        )
    };

    render() {
        return (
            <div>
                <div className="card">
                    <p><input className="card-input" type="text" onChange={(e) => this.props.set(e.target.value)} defaultValue={this.props.movie}/> <span>#{this.props.number}</span></p>
                </div>
                <p onClick={this.props.remove} className="remove">&#10006;</p>
            </div>
        );
    }
}

export default Card;