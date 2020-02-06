import React from 'react';

function Symbol(props) {
    const {text,flags}=props
    return (
        <div className="text">
            {text.map((el, i) =>
                (<span
                    style={flags[i] ?
                        {backgroundColor: "rgba(221, 252, 253, 0.24)"} :
                        {backgroundColor: "transparent"}}>
                                {el}</span>))} </div>
    );
}

export default Symbol;