import React from 'react';

export const LanTriangleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M291.2 21c-7-12.9-20.5-21-35.2-21s-28.2 8.1-35.2 21L4.8 421c-6.7 12.4-6.4 27.4.8 39.5S25.9 480 40 480h432c14.1 0 27.1-7.4 34.4-19.5s7.5-27.1.8-39.5z"})
);

export default LanTriangleSolid;
