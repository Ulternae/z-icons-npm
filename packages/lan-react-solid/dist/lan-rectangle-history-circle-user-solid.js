import React from 'react';

export function LanRectangleHistoryCircleUserSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M257.4 480c-11.2-24.4-17.4-51.4-17.4-80 0-106 86-192 192-192H64c-35.3 0-64 28.7-64 64v144c0 35.3 28.7 64 64 64zM464 136c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h368c13.3 0 24-10.7 24-24m-48-96c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24m160 360a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-66.3 80.7C489.5 500.1 462.2 512 432 512s-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7M384 368a48 48 0 1 1 96 0 48 48 0 1 1-96 0"})
  );
}

export default LanRectangleHistoryCircleUserSolid;
