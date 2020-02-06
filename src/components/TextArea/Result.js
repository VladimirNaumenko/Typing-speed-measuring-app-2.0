import React from 'react';
import star from "../../styles/img/star.png";

function Result(props) {
    const{accuracy,speedTotal,counterTotal}=props
    return (
        <div className="result">
            <div className="result-line"><span>Cкорость печати</span><span>{speedTotal}</span></div>
            <div className="result-line"><span>Напечатано символов</span><span>{counterTotal}</span></div>
            <div className="result-line"><span>Точность</span><span>{accuracy} %</span></div>
            <div className="result-line"><span>Оценка</span>
                <div>{function () {
                    let result = speedTotal / 10 + accuracy / 10

                    if (result > 20) {
                        return (<ul>
                            <li style={{backgroundImage: `url(${star})`}} className="star"></li>
                            <li style={{backgroundImage: `url(${star})`}} className="star"></li>
                            <li style={{backgroundImage: `url(${star})`}} className="star"></li>
                        </ul>)
                    } else if (result > 15) {
                        return (<ul>
                                <li style={{backgroundImage: `url(${star})`}} className="star"></li>
                                <li style={{backgroundImage: `url(${star})`}} className="star"></li>
                            </ul>
                        )
                    } else {
                        return (<ul>
                                <li style={{backgroundImage: `url(${star})`}} className="star"></li>
                            </ul>
                        )
                    }
                }()}</div>
            </div>
        </div>
    );
}

export default Result;