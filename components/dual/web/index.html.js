import getNipplejsMin from "react-native-game-pad/components/dual/web/nipplejs.min";

const getWebPageDualJoystick = () => {
  const nipplejs = getNipplejsMin();
  return `
    <html>
      <body>
        <div id="zone_joystick" style="
            position: absolute;
            width: 50%;
            height: 100%;
            left: 0;"></div>
        <div id="zone_joystick2" style="
            position: absolute;
            width: 50%;
            height: 100%;
            left: 50%;"></div>
      </body>
      <script>
        ${nipplejs}
      </script>
    </html>
    `;
}

export default getWebPageDualJoystick;
