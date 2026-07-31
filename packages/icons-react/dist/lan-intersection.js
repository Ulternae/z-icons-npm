import React from 'react';

export const LanIntersection = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 480c8.8 0 16-7.2 16-16V224c0-88.4 71.6-160 160-160s160 71.6 160 160v240c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-106-86-192-192-192S0 118 0 224v240c0 8.8 7.2 16 16 16"})
);

export default LanIntersection;
