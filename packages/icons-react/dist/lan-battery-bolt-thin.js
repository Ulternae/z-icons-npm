import React from 'react';

export const LanBatteryBoltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 448h68.1c-1.8-5.2-3.1-10.5-3.7-16H112c-35.3 0-64-28.7-64-64V144c0-35.3 28.7-64 64-64h166l17.5-16H112c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80m400-16H346l-17.5 16H512c44.2 0 80-35.8 80-80v-32h16c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-16v-32c0-44.2-35.8-80-80-80h-68.1c1.8 5.2 3.1 10.5 3.7 16H512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64m80-240h16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-16zM370.6 82.1c5.9-5.4 15.7 1.3 12.9 8.8l-55.8 146.3c-.9 2.5-.6 5.2.9 7.4s4 3.5 6.6 3.5H432c3.3 0 6.3 2 7.5 5.1s.4 6.6-2.1 8.8l-184 168c-5.9 5.4-15.7-1.3-12.9-8.8l55.7-146.3c.9-2.5.6-5.2-.9-7.4s-4-3.5-6.6-3.5H192c-3.3 0-6.3-2-7.5-5.1s-.4-6.6 2.1-8.8zm27.8 14.5c8.9-23.2-20.2-43-38.6-26.3l-184 168c-7.3 6.7-9.8 17.2-6.2 26.4S182.1 280 192 280h85.2l-51.6 135.5c-8.9 23.2 20.3 43 38.6 26.3l184-168c7.3-6.7 9.8-17.2 6.2-26.4S441.9 232 432 232h-85.2l51.6-135.5z"})
);

export default LanBatteryBoltThin;
