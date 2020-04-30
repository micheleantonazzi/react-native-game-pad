import getNipplejsMin from "./nipplejs.min";

const getWebPageDualJoystick = (backgroundColor) => {
  const nipplejs = getNipplejsMin();
  return `
    <html>
      <body style="background-color: ${backgroundColor};">
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
