import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import getWebPageSingleJoystick from "./web/index.html.js";

const js = (options) => {
  let string = `
    setTimeout(() => {
      var joystick = nipplejs.create({
        zone: document.getElementById('zone_joystick'),
        color: "${options.color}",
        lockX: ${options.lockX},
        lockY: ${options.lockY},
        mode: '${options.mode}',
            size: ${options.size},
            position: {
              left: "${options.position.left}",
              top: "${options.position.top}"
            },
      });

      joystick.on('start', function(evt, data) {
        let dataToReturn = { type: "leftOnStart", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('end', function(evt, data) {
        let dataToReturn = { type: "onLeftEnd", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })


      joystick.on('move', function(evt, data) {
        let dataToReturn = { type: "onLeftMove", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })


      joystick.on('dir', function(evt, data) {
        let dataToReturn = { type: "onLeftDir", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })


      joystick.on('dir:up', function(evt, data) {
        let dataToReturn = { type: "onLeftDirUp", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('dir:down', function(evt, data) {
        let dataToReturn = { type: "onLeftDirDown", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('dir:left', function(evt, data) {
        let dataToReturn = { type: "onLeftDirLeft", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('dir:right', function(evt, data) {
        let dataToReturn = { type: "onLeftDirRight", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('plain', function(evt, data) {
        let dataToReturn = { type: "onLeftPlane", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('plain:up', function(evt, data) {
        let dataToReturn = { type: "onLeftPlaneUp", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('plain:down', function(evt, data) {
        let dataToReturn = { type: "onLeftPlaneDown", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('plain:left', function(evt, data) {
        let dataToReturn = { type: "onLeftPlaneLeft", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })

      joystick.on('plain:right', function(evt, data) {
        let dataToReturn = { type: "onLeftPlaneRight", event: evt.type, data }
        window.ReactNativeWebView.postMessage(JSON.stringify(dataToReturn));
      })
    }, 100)
  `;

  return string;
};

class RNGameSingleJoystick extends React.Component {
  invokeCallback(json) {
    let { type, event, data } = JSON.parse(json);
    if (this.props[type]) {
      this.props[type](event, data);
    }
  }

  render() {
    let {
      color: c1 = "green",
      size: s1 = 200,
      lockX: lockX1 = false,
      lockY: lockY1 = false
    } = this.props.options;

    var options = {
      color: c1,
      mode: "static",
      size: s1,
      position: {
        left: "50%",
        top: "50%"
      },
      lockX: lockX1,
      lockY: lockY1
    };

    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <WebView
            source={{html: getWebPageSingleJoystick(this.props.backgroundColor ? this.props.backgroundColor : 'white')}}
            onMessage={evt => this.invokeCallback(evt.nativeEvent.data)}
            injectedJavaScript={js(options)}
          />
        </View>
      </View>
    );
  }
}

RNGameSingleJoystick.propTypes = {
  options: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 22,
    color: "white",
    fontWeight: "700"
  }
});

export default RNGameSingleJoystick;
