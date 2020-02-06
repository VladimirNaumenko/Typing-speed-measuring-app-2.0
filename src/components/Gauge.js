import React, { Component } from 'react';
import Gauge from 'react-canvas-gauge';
import '.././styles/main.scss';
import Key from "./Key";
// import {RadialGauge} from "react-canvas-gauges"
import { ArcGauge, RadialGauge} from '@progress/kendo-react-gauges';

const DemoContainer = ({ heading, children }) =>
    (<div><h1>{heading}</h1>{children}</div>);

const value = 30;
const pointer = {
    value: value
};

const arcCenterRenderer = (currentValue, color) => {
    return (<h3 style={{ color: "red" }}>{currentValue}%</h3>);
};

const gaugeStyles = {
    display: 'block'
};
class MyGauge extends Component {
    render() {
        return (           <div className="speedometr">
            <ArcGauge style={gaugeStyles} value={200} arcCenterRender={arcCenterRenderer} />
        </div>);
    }
}

export default MyGauge;