import { Typography, CssBaseline, withStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import openSocket from "../actions/socket/openSocket";
import ControllerComponent from "./controller-component";

const styles: any = (theme: Theme) => ({
  rawData: {
    color: "white",
    textAlign: "center"
  }
});

type AppProps = {
  classes: any;
  nominal: any;
  sensors: any;
  openSocket: Function;
};

class App extends React.Component<AppProps> {
  componentDidMount() {
    const { openSocket } = this.props;
    openSocket();
  }

  render() {
    const { classes, nominal, sensors } = this.props;
    return (
      <div>
        <CssBaseline />
        <Typography className={classes.rawData}>
          {JSON.stringify(nominal)}
          {JSON.stringify(sensors)}
        </Typography>
        <ControllerComponent />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    nominal: state.nominal.data,
    sensors: state.sensors.data
  };
};

const mapDispatchToProps = {
  openSocket
};

//@ts-ignore
const connectedApp: any = compose(withStyles(styles),connect(mapStateToProps,mapDispatchToProps))(App);

export default connectedApp;
