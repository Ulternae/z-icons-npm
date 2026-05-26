import React from 'react';

export const LanChessBishopAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8l49.3 59.1C269.2 130.9 280 161 280 192c0 24.1-6.6 47.5-18.8 68 6.5 4.3 10.8 11.7 10.8 20 0 13.3-10.7 24-24 24h-8v64l57.8 86.7c4 6.1 6.2 13.2 6.2 20.4 0 20.3-16.5 36.8-36.8 36.8l-214.4.1C32.5 512 16 495.5 16 475.2c0-7.3 2.2-14.4 6.2-20.4L80 368.1v-64h-8c-13.3 0-24-10.7-24-24 0-8.4 4.3-15.7 10.8-20-12.2-20.4-18.8-43.9-18.8-68 0-31 10.9-61 30.7-84.9L120 48h-8c-13.3 0-24-10.7-24-24S98.7 0 112 0zM73.7 464h172.6l-32-48H105.7zM128 304v64h64v-64zm-20.4-166.2C94.9 153 88 172.2 88 192s6.9 38.9 19.6 54.1l8.2 9.9h88.4l8.2-9.9C225 230.9 232 211.8 232 192c0-11-2.2-21.8-6.2-31.8L201 185c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l30.7-30.8L160 75l-52.4 62.9z"})
);

export default LanChessBishopAltRegular;
