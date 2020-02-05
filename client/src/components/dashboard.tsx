import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer"
import StopButton from "./stop-button";
import ConnectionQualityComponent from "./connection-quality-component";
import "./dashboard.css";
import Gauge from "./gauge-component";

import DataPacket from "../types";
import sensorsReducer from "../reducers/sensorsReducer";
type DashProps = {
    sensors: DataPacket;
}
// this is the dash
// clean up style code later
class DashComponent extends React.Component<DashProps> {
    render() {
        return ( 
            <div style={{ background:"lightGreen", height:"200px"}}>
                <StopButton/> 
                <div style={{position: "fixed", top: 0, right: 0}}>
                        <ConnectionQualityComponent quality={this.props.sensors.quality}/>  
                        <Gauge value = {this.props.sensors.speed}/>
                </div> 
                <div className = "dashStyles">
                <ReactSpeedometer maxValue = {100} value={this.props.sensors.speed}/>
                </div> 
            </div>
        )
    }
}


export default DashComponent;