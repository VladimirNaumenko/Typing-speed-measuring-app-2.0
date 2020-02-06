import React from 'react';
import SemiCircleProgressBar from "react-progressbar-semicircle";

function Header(props) {
    const {speedTotal, accuracy,init,timer,mSec} = props
    return (
        <header className="header">
            <div className="time" style={init?{opacity:"1"}:{opacity:"0"}}>
                <h4 color={timer<6?"red":"white"} style={timer<6?{color:"red"}:{color:"white"}}>{timer}</h4>
                <span style={timer<6?{color:"red"}:{color:"white"}}>{mSec}</span>
            </div>
            <div className="speedometr">
                <SemiCircleProgressBar
                    percentage={(speedTotal / 100) * 30}
                    stroke={"#797CC4"}/>
                <div className="speed-total"><h4>{speedTotal}</h4><span>символов в минуту</span>
                </div>
            </div>
            <div className="accuracity" style={init?{opacity:"1"}:{opacity:"0"}}>
                <h4>{accuracy}%</h4>
                <span>точность</span>
            </div>
        </header>
    );
}

export default Header;