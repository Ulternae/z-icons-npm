import React from 'react';

export const LanIntersectionThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 480c4.4 0 8-3.6 8-8V224c0-97.2 78.8-176 176-176s176 78.8 176 176v248c0 4.4 3.6 8 8 8s8-3.6 8-8V224c0-106-86-192-192-192S0 118 0 224v248c0 4.4 3.6 8 8 8"})
);

export default LanIntersectionThin;
