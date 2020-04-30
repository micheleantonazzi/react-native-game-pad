import * as React from "react";
import PropTypes from "prop-types";
import { RNGamePadSingle } from "./components/single-joystick-buttons/single-joystick-buttons";
import RNGamePadDual from "./components/dual-joystick/dual-joystick";

class RNGamePad extends React.Component {
  renderKeyboard = () => {
    switch (this.props.joystickType) {
      case 'single-joystick-buttons':
        return <RNGamePadSingle {...this.props} />;
        break;
      case 'dual-joystick':
        return <RNGamePadDual {...this.props} />;
        break;
    }
  };

  render() {
    return <>{this.renderKeyboard()}</>;
  }
}

RNGamePad.defaulProps = {
  joystickType: 'single-joystick-buttons'
}

RNGamePad.propTypes = {
  joystickType: PropTypes.string
};

export default RNGamePad;
