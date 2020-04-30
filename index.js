import * as React from "react";
import PropTypes from "prop-types";
import { RNGamePadSingle } from "./components/single-joystick-buttons/single-joystick-buttons";
import RNGamePadDual from "./components/dual-joystick/dual-joystick";
import RNGameSingleJoystick from "./components/single-joystick/single-joystick"

class RNGamePad extends React.Component {
  renderKeyboard = () => {
    const defaultOptions = {options:{
      size: 200,
        color: "blue",
        lockY: true
    }};
    const defaulOptions2 = {
      size: 200,
        color: "red",
        lockX: true
    };
    const propsWithOptions = {...defaultOptions, ...this.props};
    const propsWithOptionsAndOptions2 = {...defaultOptions, ...defaulOptions2, ...this.props}

    switch (this.props.joystickType) {
      case 'single-joystick-buttons':
        return <RNGamePadSingle {...propsWithOptions} />;
        break;
      case 'dual-joystick':
        return <RNGamePadDual {...propsWithOptionsAndOptions2} />;
        break;
      case 'single-joystick':
        return <RNGameSingleJoystick {...propsWithOptions} />;
        break;
    }
  };

  render() {
    return <>{this.renderKeyboard()}</>;
  }
}

RNGamePad.defaulProps = {
  joystickType: 'single-joystick-buttons',
  onStart: (evt, data) => {},
  onEnd: (evt, data) => {},
  onMove: (evt, data) => {},
  onDir: (evt, data) => {},
  onDirUp: (evt, data) => {},
  onDirDown: (evt, data) => {},
  onDirLeft: (evt, data) => {},
  onDirRight: (evt, data) => {},
  onPlane: (evt, data) => {},
  onPlaneUp: (evt, data) => {},
  onPlaneDown: (evt, data) => {},
  onPlaneLeft: (evt, data) => {},
  onPlaneRight: (evt, data) => {},
  onLeftStart: (evt, data) => {},
  onLeftEnd: (evt, data) => {},
  onLeftMove: (evt, data) => {},
  onLeftDir: (evt, data) => {},
  onLeftDirUp: (evt, data) => {},
  onLeftDirDown: (evt, data) => {},
  onLeftDirLeft: (evt, data) => {},
  onLeftDirRight: (evt, data) => {},
  onLeftPlane: (evt, data) => {},
  onLeftPlaneUp: (evt, data) => {},
  onLeftPlaneDown: (evt, data) => {},
  onLeftPlaneLeft: (evt, data) => {},
  onLeftPlaneRight: (evt, data) => {},
  onRightStart: (evt, data) => {},
  onRightEnd: (evt, data) => {},
  onRightMove: (evt, data) => {},
  onRightDir: (evt, data) => {},
  onRightDirUp: (evt, data) => {},
  onRightDirDown: (evt, data) => {},
  onRightDirLeft: (evt, data) => {},
  onRightDirRight: (evt, data) => {},
  onRightPlane: (evt, data) => {},
  onRightPlaneUp: (evt, data) => {},
  onRightPlaneDown: (evt, data) => {},
  onRightPlaneLeft: (evt, data) => {},
  onRightPlaneRight: (evt, data) => {},
  onButtonAPress: () => {},
  onButtonBPress: () => {},
  buttonBColor: "red",
  buttonAColor: "green",
  backgroundColor: "#ffffff"
}

RNGamePad.propTypes = {
  joystickType: PropTypes.string,
  onStart: PropTypes.func,
  onEnd: PropTypes.func,
  onMove: PropTypes.func,
  onDir: PropTypes.func,
  onDirUp: PropTypes.func,
  onDirDown: PropTypes.func,
  onDirLeft: PropTypes.func,
  onDirRight: PropTypes.func,
  onPlane: PropTypes.func,
  onPlaneUp: PropTypes.func,
  onPlaneDown: PropTypes.func,
  onPlaneLeft: PropTypes.func,
  onPlaneRight: PropTypes.func,
  onLeftStart: PropTypes.func,
  onLeftEnd: PropTypes.func,
  onLeftMove: PropTypes.func,
  onLeftDir: PropTypes.func,
  onLeftDirUp: PropTypes.func,
  onLeftDirDown: PropTypes.func,
  onLeftDirLeft: PropTypes.func,
  onLeftDirRight: PropTypes.func,
  onLeftPlane: PropTypes.func,
  onLeftPlaneUp: PropTypes.func,
  onLeftPlaneDown: PropTypes.func,
  onLeftPlaneLeft: PropTypes.func,
  onLeftPlaneRight: PropTypes.func,
  onRightStart: PropTypes.func,
  onRightEnd: PropTypes.func,
  onRightMove: PropTypes.func,
  onRightDir: PropTypes.func,
  onRightDirUp: PropTypes.func,
  onRightDirDown: PropTypes.func,
  onRightDirLeft: PropTypes.func,
  onRightDirRight: PropTypes.func,
  onRightPlane: PropTypes.func,
  onRightPlaneUp: PropTypes.func,
  onRightPlaneDown: PropTypes.func,
  onRightPlaneLeft: PropTypes.func,
  onRightPlaneRight: PropTypes.func,
  onButtonAPress: PropTypes.func,
  onButtonBPress: PropTypes.func,
  buttonBColor: PropTypes.string,
  buttonAColor: PropTypes.string,
  options: PropTypes.object,
  options2: PropTypes.object,
  backgroundColor: PropTypes.string
};

export default RNGamePad;
