import React from 'react';

const Key = props => {
    return (
        <button disabled={props.disabled ? true : false} className="button key" onClick={() => props.guessHandler(props.index)}>{props.children}</button>
    )
}

export default Key;