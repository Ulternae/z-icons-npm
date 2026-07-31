import React from 'react';

export const LanScooterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 40c0-4.4 3.6-8 8-8h88c3.7 0 7 2.6 7.8 6.2l64 280 .5 2.2c2.5-.2 5.1-.4 7.7-.4 44.2 0 80 35.8 80 80s-35.8 80-80 80c-38.7 0-71-27.5-78.4-64H158.4c-7.4 36.5-39.7 64-78.4 64-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80h192c0-36 23.8-66.5 56.6-76.5l-.4-1.7L345.6 48H264c-4.4 0-8-3.6-8-8M144 400a64 64 0 1 0-128 0 64 64 0 1 0 128 0m352 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
);

export default LanScooterThin;
