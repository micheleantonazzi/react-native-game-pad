import getNipplejsMin from "./nipplejs.min";

const getWebPageSingleJoystick = (backgroundColor) => {
  const nipplejs = getNipplejsMin();
  return `
    <html>
      <body style="background-color: ${backgroundColor};">
        <div id="zone_joystick" style="
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;"></div>
      </body>
      <script>
        ${nipplejs}
      </script>
    </html>
    `;
}

export default getWebPageSingleJoystick;
