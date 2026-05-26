import React from 'react';

export const LanArrowDownFromArcThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16c132.5 0 240 107.5 240 240 0 4.4 3.6 8 8 8s8-3.6 8-8C512 114.6 397.4 0 256 0S0 114.6 0 256c0 4.4 3.6 8 8 8s8-3.6 8-8C16 123.5 123.5 16 256 16m125.7 373.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 484.7V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v316.7L141.7 378.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3l120-120z"})
);

export default LanArrowDownFromArcThin;
