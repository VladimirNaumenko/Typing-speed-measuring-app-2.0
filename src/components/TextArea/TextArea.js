import React from 'react';
import star from "../../styles/img/star.png";
import Result from "./Result";
import Symbol from "./Symbol";

function TextArea(props) {
    const {text, result, flags, accuracy, speedTotal, counterTotal} = props
    return (
        <div className="main-area">{function () {
            if (!result) {
                return (
                    <Symbol text={text} flags={flags} />)
            } else if (result) {
                return (
                    <Result counterTotal={counterTotal}
                            speedTotal={speedTotal}
                            accuracity={accuracy}
                            result={result} />)
            }
        }()}


        </div>
    );
}

export default TextArea;