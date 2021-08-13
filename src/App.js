import './App.css';
import {Component} from "react";
import Card from "./components/card/card";
import Input from "./components/input/input";
import { nanoid } from 'nanoid'

class App extends Component {
    state = {
        posts: [],
        inputValue: '',
    };

    setState = this.setState.bind(this);

    addPost = () => {
        if (this.state.inputValue !== '') {
            const posts = [...this.state.posts];
            posts.push({movie: this.state.inputValue, id: nanoid(), number: this.state.posts.length});
            this.setState({posts});
            this.setState({inputValue: ''});
        }
    };

    removePost = index => {
        const posts = [...this.state.posts];
        posts.splice(index, 1);
        this.setState({posts});
    };

    changeInputValue(value) {
        this.setState({inputValue: value})
    }

    changeCardInputValue(value, index) {
        const posts = [...this.state.posts];
        const updated = posts[index];
        updated.movie = value
        posts[index] = updated
        this.setState({posts})
    }

    render() {
        return (
            <div className="container">
                <div className="container-inner">
                    <Input
                        inputValue={this.state.inputValue}
                        add={this.addPost}
                        set={(value) => this.changeInputValue(value)}
                    />
                    <p className="onWatch">To watch list:</p>
                    {this.state.posts.map((post, index) => (
                        <Card
                            key={post.id}
                            index={index}
                            number={index + 1}
                            movie={post.movie}
                            set={(value) => this.changeCardInputValue(value, index)}
                            remove={() => this.removePost(index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
