import React from 'react';

export const LanZzzSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h32l-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5S179.9 192 192 192h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32l57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S300.1 0 288 0zm128 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h32l-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5S307.9 416 320 416h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32l57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S428.1 224 416 224zM32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32h91.7L7.4 459.5C-.5 469-2.3 482.3 3 493.6S19.6 512 32 512h160c17.7 0 32-14.3 32-32s-14.3-32-32-32h-91.7l116.3-139.5c7.9-9.5 9.7-22.8 4.4-34.1S204.4 256 192 256z"})
);

export default LanZzzSolid;
