import getNipplejsMin from "./nipplejs.min.js";

const getWebPageSingleJoystick = () => {
  const nipplejs = getNipplejsMin();
  return `
    <html>
      <body>
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
