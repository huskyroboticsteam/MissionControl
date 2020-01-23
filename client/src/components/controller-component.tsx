import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import Gamepad from "react-gamepad";

type ControllerProps = {};

class ControllerComponent extends React.Component<ControllerProps> {
  connectHandler(gamepadIndex: number) {
    console.log(`Gamepad ${gamepadIndex} connected !`);
  }

  disconnectHandler(gamepadIndex: number) {
    console.log(`Gamepad ${gamepadIndex} disconnected !`);
  }

  buttonChangeHandler(buttonName: string, down: boolean) {
    console.log(buttonName, down);
  }

  axisChangeHandler(axisName: string, value: number, previousValue: number) {
    console.log(axisName, value);
  }

  buttonDownHandler(buttonName: string) {
    console.log(buttonName, "down");
  }

  buttonUpHandler(buttonName: string) {
    console.log(buttonName, "up");
  }
  render() {
    return (
      <Gamepad
        onConnect={this.connectHandler}
        onDisconnect={this.disconnectHandler}
        onButtonChange={this.buttonChangeHandler}
        onAxisChange={this.axisChangeHandler}
      >
        <div>hi</div>
      </Gamepad>
    );
  }
}

export default ControllerComponent;
