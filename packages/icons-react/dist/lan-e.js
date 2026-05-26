import React from 'react';

export const LanE = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48v416c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V272h208c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V64h272c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanE;
