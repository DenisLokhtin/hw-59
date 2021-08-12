import './App.css';
import {Component} from "react";
import Card from "./components/card/card";
import Input from "./components/input/input";
import { nanoid } from 'nanoid'

class App extends Component {
    state = {
        posts: [
            // {movie: 'ssss', id: 1},
        ],
        inputValue: '',
        cardInputValue: '',
    };

    setState = this.setState.bind(this);

    addPost = () => {
        console.log('click 1')
        if (this.state.inputValue !== '') {
            const posts = [...this.state.posts, []];
            posts.push({movie: this.state.inputValue, id: this.state.posts.length,});
            this.setState(posts);
            this.setState({inputValue: ''});
            console.log('click 2')
            console.log(this.state.posts.length)
        }
    };


    render() {
        // console.log(this.state.posts[0].movie)
        // console.log(this.state.cardInputValue)
        return (
            <div className="container">
                <div className="container-inner">
                    <Input inputValue={this.state.inputValue} add={this.addPost}  set={this.setState} />
                    <p className="onWatch">To watch list:</p>
                    {this.state.posts.map(post => (
                        <Card
                            key={post.id}
                            movie={post.movie}
                            set={this.setState}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
