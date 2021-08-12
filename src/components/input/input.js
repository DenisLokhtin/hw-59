import React, {Component} from 'react';
import './input.css'

class Input extends Component {
    render() {
        return (
            <div>
                <input onChange={(e) => this.props.set({inputValue: e.target.value})} value={this.props.inputValue} className="post-input" type="text" placeholder="Movie"/>
                <button onClick={this.props.add} className="add-btn">Add</button>
            </div>
        );
    }
}

export default Input;