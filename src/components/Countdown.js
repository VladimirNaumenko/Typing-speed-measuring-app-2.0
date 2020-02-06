import React from 'react';

function Countdown(props) {
    const {countdownInit,countdown} = props
    return (
        <div className="countdown"
             style={countdownInit ? {opacity: "1"} : {opacity: "0"}}
        >{function () {
            if (countdown < 1) {
                return (<h4>Печатайте!</h4>)
            }
            return (<h4>{countdown}</h4>)
        }()}

        </div>
    );
}

export default Countdown;