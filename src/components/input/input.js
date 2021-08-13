import React, {Component} from 'react';
import './input.css'

class Input extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.inputValue !== this.props.inputValue
            )
    };

    render() {
        return (
            <div>
                <input onChange={(e) => this.props.set(e.target.value, this.props.index)} value={this.props.inputValue} className="post-input" type="text" placeholder="Movie"/>
                <button onClick={this.props.add} className="add-btn">Add</button>
            </div>
        );
    }
}

export default Input;