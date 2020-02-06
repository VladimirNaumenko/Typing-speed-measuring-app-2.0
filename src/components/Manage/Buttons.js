import React from 'react';

function Buttons(props) {
    const {result,start,play,reset,reference}=props
    return (
        <div className="buttons">
            <button onClick={() => {
                if (!result){start()}}}>Старт</button>
            <button onClick={reset}>Сброс</button>
            <button onKeyPress={play} ref={reference}
                    style={{opacity: "0", position: "absolute"}}>игра</button>
        </div>

    );
}

export default Buttons;