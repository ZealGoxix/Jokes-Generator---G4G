

import "./Button.css"

const Button = (props) => {


    return (
        <button onClick={props.callAPI}>
            Click to generate a joke.
        </button>
    )
}

export default Button;