import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import StopButton from "./stop-button";
import ConnectionQualityComponent from "./connection-quality-component";
import "./dashboard.css";
import DataPacket from "../types";
import  *  as  data  from  './data.json';

type DashProps = {
  sensors: DataPacket;
};

var parsedData = JSON.parse(JSON.stringify(data)).default;
var x = parsedData.GPS[0].Latitude;

class DashComponent extends React.Component<DashProps> {
    render() {
        return ( 
            <div style={{ background:"#959298", height:"250px"}}>
                <div style = {{float:"left", padding: "10px", margin: "40px"}}>
                <StopButton/> 
                </div>
                <div style = {{float:"left", marginTop: "30px", margin: "30px"}}>
                <ReactSpeedometer
                maxValue={500}
                value={473}
                needleColor="yellow"
                startColor="green"
                maxSegmentLabels={5}
                segments={10}
                endColor="blue"
                />
                </div>
                <div style = {{float:"left", background: "#F3F5AD", padding: "15px", margin: "40px"}}>
                <p>
                    X: {x} <br/> <br/> Y: -88.39 <br/> <br/> Z: 5.55
                </p>
                </div>  
                <div style = {{float:"right", padding: "1px", margin: "30px"}}>
                <ConnectionQualityComponent quality={100}/>
                </div>
            </div>
        )
    }
}



export default DashComponent;
