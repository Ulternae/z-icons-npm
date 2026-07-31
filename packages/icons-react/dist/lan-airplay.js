import React from 'react';

export const LanAirplay = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 96H64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h14.9l-30.2 30.2C20.7 407.3 0 382.1 0 352V128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v224c0 30.1-20.7 55.3-48.7 62.2L433.1 384H448c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32m-64 352L256 320 128 448zm-256 32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S396.9 480 384 480z"})
);

export default LanAirplay;
