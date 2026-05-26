import React from 'react';

export const LanT = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h160v400c0 8.8 7.2 16 16 16s16-7.2 16-16V64h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanT;
