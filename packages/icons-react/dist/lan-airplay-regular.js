import React from 'react';

export const LanAirplayRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 112H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h30.9l-46.2 46.2C20.7 407.3 0 382.1 0 352V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v224c0 30.1-20.7 55.3-48.7 62.2L417.1 368H448c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16M345.4 432 256 342.6 166.6 432h178.7zM128 480c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S396.9 480 384 480z"})
);

export default LanAirplayRegular;
