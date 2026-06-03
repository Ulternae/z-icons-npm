import React from 'react';

export const LanUpLongToLineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.052 -64 320.13 640',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288-64c17.7 0 32 14.3 32 32S305.7 0 288 0H32C14.3 0 0-14.3 0-32s14.3-32 32-32zM137.4 73.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S300.9 256 288 256h-64v272c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V256H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 7-34.8z"})
);

export default LanUpLongToLineSolid;
