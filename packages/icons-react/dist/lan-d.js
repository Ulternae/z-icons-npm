import React from 'react';

export const LanD = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h144c123.7 0 224 100.3 224 224S283.7 480 160 480H16c-8.8 0-16-7.2-16-16zm32 16v384h128c106 0 192-86 192-192S266 64 160 64z"})
);

export default LanD;
