import React from "react"

import "./Joke.css"
import Button from "./Button.jsx"

const Joke = () => {
    const [Joke, setJoke] = React.useState('');

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className="joke">
            <p>{Joke}</p>
            <Button callAPI={fetchApi} />
        </div>
    )
}

export default Joke