import React from 'react';

export const LanLeafMapleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -6.4 576 550.6',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M275.7-.4c6.4-8 18.6-8 25 0L352.2 64h44.5c10.1 0 17.7 9.3 15.7 19.2l-26.8 133.5 65.8-59.3c7.6-6.8 19.5-4.9 24.6 3.9l19.3 33.3 55.5 14.9c8.5 2.3 13.6 11.1 11.3 19.6l-14.9 55.5 19.2 33.3c5.1 8.8.8 20.1-8.9 23.3l-140.7 45.4 8.8 51.1c2.1 12-9.4 21.8-20.9 17.9L320.4 427v85.2c0 17.7-14.3 32-32 32s-32-14.3-32-32v-85.3l-85.8 28.6c-11.7 3.9-23.2-6.3-20.8-18.3l9.9-50.8L19.1 341c-9.7-3.1-14-14.4-8.9-23.3l19.2-33.3-14.9-55.5c-2.3-8.5 2.8-17.3 11.3-19.6l55.5-14.9 19.2-33.3c5.1-8.8 17-10.7 24.6-3.9l65.7 59.3L164.1 83c-2-9.9 5.6-19.2 15.7-19.2h44.5L275.8-.6z"})
);

export default LanLeafMapleSolid;
