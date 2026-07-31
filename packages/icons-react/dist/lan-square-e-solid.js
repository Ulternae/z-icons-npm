import React from 'react';

export const LanSquareESolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm104 112h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v40h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72v40h88c13.3 0 24 10.7 24 24s-10.7 24-24 24H168c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24"})
);

export default LanSquareESolid;
