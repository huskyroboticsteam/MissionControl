import * as React from "react";
import Gamepad from "react-gamepad";
import { ArmMotor } from "../arm-motor";
import { RoverCommands } from "../rover-commands";

const DRIVER_GAMEPAD_INDEX = 0;
const ARM_GAMEPAD_INDEX = 1;

let forwardBackward = 0.0;
let leftRight = 0.0;

class ControllerComponent extends React.Component<{}, {}> {
  connectHandler(gamepadIndex: number) {
    if (gamepadIndex === DRIVER_GAMEPAD_INDEX) {
      console.log("Driver connected!");
    } else if (gamepadIndex === ARM_GAMEPAD_INDEX) {
      console.log("Arm operator connected!");
    }
  }

  disconnectHandler(gamepadIndex: number) {
    if (gamepadIndex === DRIVER_GAMEPAD_INDEX) {
      console.log("Driver disconnected!");
    } else if (gamepadIndex === ARM_GAMEPAD_INDEX) {
      console.log("Arm operator disconnected!");
    }
  }

  armButtonChangeHandler(buttonName: string, down: boolean) {
    let wristPower = 0;
    if (buttonName === "DPadDown") {
      if (down) {
        wristPower = -1;
      }
    } else if (buttonName === "DPadUp") {
      if (down) {
        wristPower = 1;
      }
    }
    RoverCommands.setMotorPower(ArmMotor.DIFF_LEFT, wristPower);
    RoverCommands.setMotorPower(ArmMotor.DIFF_RIGHT, wristPower);
  }

  driveAxisChangeHandler(axisName: string, value: number, previousValue: number) {
    if (axisName === "LeftStickY") {
      forwardBackward = value;
    } else if (axisName === "RightStickX") {
      // negative leftRight causes clockwise rotation
      leftRight = -value;
    }
    RoverCommands.setDrivePower(forwardBackward, leftRight);
  }

  armAxisChangeHandler(axisName: string, value: number, previousValue: number) {
    if (axisName === "LeftStickX") {
      RoverCommands.setMotorPower(ArmMotor.ARM_BASE, value);
    } else if (axisName === "LeftStickY") {
      RoverCommands.setMotorPower(ArmMotor.SHOULDER, value);
    } else if (axisName === "RightStickX") {
      RoverCommands.setMotorPower(ArmMotor.FOREARM, value);
    } else if (axisName === "RightStickY") {
      RoverCommands.setMotorPower(ArmMotor.ELBOW, value);
    } else if (axisName === "LeftTrigger") {
      RoverCommands.setMotorPower(ArmMotor.HAND, -value);
    } else if (axisName === "RightTrigger") {
      RoverCommands.setMotorPower(ArmMotor.HAND, value);
    }
  }

  render() {
    return (
      <div>
        { /* Drive gamepad */}
        <Gamepad
          gamepadIndex={DRIVER_GAMEPAD_INDEX}
          onConnect={this.connectHandler}
          onDisconnect={this.disconnectHandler}
          onAxisChange={this.driveAxisChangeHandler}
        >
          <div></div>
        </Gamepad>
        { /* Arm gamepad */}
        <Gamepad
          gamepadIndex={ARM_GAMEPAD_INDEX}
          onConnect={this.connectHandler}
          onDisconnect={this.disconnectHandler}
          onButtonChange={this.armButtonChangeHandler}
          onAxisChange={this.armAxisChangeHandler}
        >
          <div></div>
        </Gamepad>
      </div>
    );
  }
}

export default ControllerComponent;
