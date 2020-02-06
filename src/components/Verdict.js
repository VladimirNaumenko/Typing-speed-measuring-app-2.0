import React from 'react';

function Verdict(props) {
    const {init, speedTotal}=props
    return (
        <div className="verdict"
             style={init ? {opacity: "1"} :
                 {opacity: "0"}}>{function () {
            if (speedTotal < 60) {
                return <span style={{color:"grey"}}>постарайтесь!</span>
            }
            if (speedTotal < 100) {
                return <span style={{color:"white"}}>неплохо</span>
            }
            if (speedTotal < 130) {
                return <span style={{color:"lightgreen"}}>хорошо</span>
            }
            if (speedTotal < 160) {
                return <span style={{color:"blue"}}>отлично!</span>
            }
            if (speedTotal > 160) {
                return <span style={{color:"gold"}}>превосходно!</span>
            }
        }()}
        </div>
    );
}

export default Verdict;