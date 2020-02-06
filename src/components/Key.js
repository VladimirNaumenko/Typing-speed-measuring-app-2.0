import React from 'react';

function Key(props) {
    return (
        <div className="keyboard">
            <div className="key"
                 style={this.state.value2 === "q" ? {backgroundColor: "red"} : {backgroundColor: "white"}}>
                <span>q</span></div>
            <div className="key"><span>w</span></div>
            <div className="key"><span>e</span></div>
            <div className="key"><span>r</span></div>
            <div className="key"><span>t</span></div>
            <div className="key"><span>y</span></div>
            {/*<Key flag={this.state.flags[i]}/>*/}
        </div>
    );
}

export default Key;