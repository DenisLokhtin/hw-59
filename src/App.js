import Button from "./components/btn/Button";
import './App.css';
import {useState} from "react";

function App() {

    const [joke, setJoke] = useState('')

    const fetchData = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if (response.ok) {
            const joke = await response.json();
            setJoke(joke.value);
        }
    };

    return (
        <div className="container">
            <Button fetch={() => fetchData()}/>
            <div>{joke}</div>
        </div>
    );
}

export default App;
